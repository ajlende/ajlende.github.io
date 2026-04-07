// Adapted from https://www.shadertoy.com/view/slcGz7
// ------------------------------------------

// colors used to draw the plant
// yellow-800
#define STEM vec3(.269, .372, .257)
// yellow-400
#define LEAF vec3(.822, .574, .074)
// yellow-300
#define LEAF_TIP vec3(.949, .65, 0.)
// yellow-200
#define LEAF_OUTLINE vec3(1., .755, .177)

// ------------------------------------------------
// bezier functions from 
// Interpolation: Bezier, Cubic
// by 4rknova
// https://www.shadertoy.com/view/ll23Wt
#define STEPS  20.
#define STROKE .8
#define LEAF_COUNT 17.
#define EPS    .01

vec2 interpolate(vec2 a, vec2 b, vec2 c, vec2 d, float p)
{
    vec2 v0 = mix(a, b, p);
    vec2 v1 = mix(b, c, p);
    vec2 v2 = mix(c, d, p);
    vec2 v3 = mix(v0, v1, p);
    vec2 v4 = mix(v1, v2, p);
    
    return mix(v3, v4, p);
}
float df_line(in vec2 p, in vec2 a, in vec2 b)
{
    vec2 pa = p - a, ba = b - a;
	float h = clamp(dot(pa,ba) / dot(ba,ba), 0., 1.);	
	return length(pa - ba * h);
}
float sharpen(in float d, in float w)
{
    float e = 1. / min(iResolution.y , iResolution.x);
    return 1. - smoothstep(-e, e, d - w);
}
// ----------------------------------------------------

// all sdf functions from iq
//https://iquilezles.org/articles/distfunctions2d
float sdEgg( in vec2 p, in float ra, in float rb )
{
    const float k = sqrt(3.0);
    p.x = abs(p.x);
    float r = ra - rb;
    return ((p.y<0.0)       ? length(vec2(p.x,  p.y    )) - r :
            (k*(p.x+r)<p.y) ? length(vec2(p.x,  p.y-k*r)) :
                              length(vec2(p.x+r,p.y    )) - 2.0*r) - rb;
}

//https://iquilezles.org/articles/functions
float polyImpulse( float k, float n, float x )
{
    return (n/(n-1.0))*pow((n-1.0)*k,1.0/n)*x/(1.0+k*pow(x,n));
}

/////////////////////////

float Leaf(vec2 uv, float radius, float tip, float pos)
{
    vec2 size = mix(vec2(4.), vec2(.75, 0.7), polyImpulse(1.5, 1.5, pos));
    vec2 p = uv * size;
    p += vec2(0., tip * 0.5);
    float leaf = sdEgg(p, radius, tip);
    leaf = min(leaf, sdEgg(-p, radius, tip));
    return leaf;
}

vec2 Rotate2D( vec2 p, float theta )
{
    float co = cos( theta );
    float si = sin( theta );
    return vec2( co * p.x + si * p.y,
                -si * p.x + co * p.y );
}

float LeafTier(vec2 uv, vec2 a, vec2 b, vec2 c, vec2 d, 
    float pos, out vec3 col)
{
    vec2 end1 = interpolate(a, b, c, d, 0.);
    vec2 p = interpolate(a, b, c, d, pos);
    float radius = 0.05;
    float tip = -0.5;
    vec2 leafPos = uv - p;
    float r = dot(leafPos, end1);
    leafPos = Rotate2D(leafPos, -1. + r / max(0.2, pos));
    float leaf = Leaf(leafPos, radius, tip, pos);
    leafPos = Rotate2D(
        leafPos, 2. - (cos(iTime * 0.5) * r / max(0.2, pos)));
    float leaf2 = Leaf(leafPos, radius, tip, pos);
    float leaves = min(leaf, leaf2);
    float maxDist = .4;
    float dist = distance(uv, p);
    dist = clamp(dist/maxDist, 0., 1.);
    col.rgb = LEAF_OUTLINE;
    col.rgb = mix(col.rgb, LEAF, 1.-smoothstep(0., 0.05, abs(leaf)+0.005));
    col.rgb = mix(col.rgb, LEAF, 1.-smoothstep(0., 0.05, abs(leaf2)));
    return sharpen(leaves, EPS);
}

float Branch(in vec2 uv, out vec3 leafCol)
{
    // the movement is based on https://www.shadertoy.com/view/MlKcDD
    vec2 a = vec2(-.25, .25) * 1. + (cos(iTime * 0.5) * 0.085);
    vec2 b = vec2( .00, .75) * (cos(iTime * 0.25) * 0.25 + 0.5);
    vec2 c = vec2( .75,-.75);
    vec2 d = vec2( .0, -.9);

    float leaf = 0.;
    float stem = 0.;
    for (float i = 0.; i < STEPS; ++i)
    {
        vec2  p0 = interpolate(a, b, c, d, (i   ) / STEPS);
        vec2  p1 = interpolate(a, b, c, d, (i+1.) / STEPS);
        float l = sharpen(df_line(uv, p0, p1), EPS * STROKE);
        stem = max(stem, l);
    }   
    leaf = stem;
    leafCol = STEM * stem;
    for (float i = 0.1; i < LEAF_COUNT; i++)
    {
        vec3 nextCol;
        float nextLeaf = LeafTier(uv, a, b, c, d, 0.05 * i, nextCol);
        leafCol = mix(leafCol, nextCol, nextLeaf);
        leaf = max(leaf, nextLeaf);
    }
    return leaf;
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
	vec2 uv = (fragCoord.xy / iResolution.xy * 2. - 1.);
    uv.x *= iResolution.x / iResolution.y;
    uv = uv + vec2(0.0, -0.1);

    vec3 leafCol = vec3(0.,0.,0.); // out
    float branch = Branch(uv, leafCol);
    fragColor = mix(vec4(0.,0.,0.,0.), vec4(leafCol.rgb,1.), branch);
}