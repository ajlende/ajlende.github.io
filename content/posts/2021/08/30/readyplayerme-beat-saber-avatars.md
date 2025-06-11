---
title: "ReadyPlayerMe Beat Saber Avatars"
author: "Alex Lende"
date: 2021-08-30T00:00:00Z
categories:
  - Code
---

[September 5, 2021]

Updated and confirmed working with

- Beat Saber 1.17.0
- [Custom Avatars 5.2.8](https://github.com/nicoco007/BeatSaberCustomAvatars/releases/tag/v5.2.8)
- [Unity 2019.4.28](https://unity3d.com/get-unity/download/archive)

---

There's a really neat tool for creating personalized avatars for VR games called [ReadyPlayerMe](https://readyplayer.me). Getting an avatar set up is pretty slick and it supports games like [VRChat](https://hello.vrchat.com) right out of the box.

One game that isn't officially supported is [Beat Saber](https://www.beatsaber.com/), my personal favorite VR game. It's not surprising that it isn't officially supported because you need a modded version of the game with [Custom Avatars](https://github.com/nicoco007/BeatSaberCustomAvatars) installed to even have custom avatars in the game.

Fortunately, you can export a model directly from ReadyPlayerMe for usage *anywhere* with the right amount of effort.

## Download the Unity project

![](https://ajlende.blog/wp-content/uploads/2021/09/1-unity-project.jpg)

To get started, download the [BeatSaberCustomAvatars Unity project](https://download-directory.github.io/?url=https%3A%2F%2Fgithub.com%2Fajlende%2FBeatSaberCustomAvatars%2Ftree%2Freadyplayerme%2FUnity%2FBeatSaberCustomAvatars) from my GitHub. It uses [Unity 2019.4.28](https://unity3d.com/get-unity/download/archive) which you can get from the Unity download archive.

Once you open the project, you'll find a TemplateReadyPlayerMe folder under Assets and a TemplateReadyPlayerMe scene that we'll be working in.

<aside>
What's different from the [nicoco007/BeatSaberCustomAvatars](https://github.com/nicoco007/BeatSaberCustomAvatars) Unity project?

This project includes a few additional things:

- glTFUtility for importing glTF models
- custom shaders for glTF models
- human template file (.ht) for ReadyPlayerMe avatars
</aside>

## Export the model from ReadyPlayerMe

![](https://ajlende.blog/wp-content/uploads/2021/09/2-readyplayerme-export.jpg)

Create your avatar on ReadyPlayerMe and select "Download Avatar as .glb file". Save the file into the TemplateReadyPlayerMe folder. [glTFUtility](https://github.com/Siccity/GLTFUtility) is included in the project and can read the .glb file type.

<aside>
What's with the Creative Commons thing?

Wolfprint 3D (who made ReadyPlayerMe) uses [CC BY-NC-SA 4.0 license](https://creativecommons.org/licenses/by-nc-sa/4.0/) on their models. The avatar that we're making here must use the same license (SA = ShareAlike). You can't use it for commercial purposes (NC = NonCommercial). And you have to credit the author (BY = Attribution). The Attribution point will be important for later.
</aside>

## Override the shaders

![](https://ajlende.blog/wp-content/uploads/2021/08/3-override-shaders.jpg)

With your custom avatar imported, select it in the Project panel. Then in the Inspector panel, under Import Setting > Shader Overrides, override the shaders like shown in the sample model.

| | |
|---|---|
| Metallic | BS-glTF-Metallic.shader |
| Metallic Blend | BS-glTF-Metallic-Dither.shader |
| Specular | BS-glTF-Specular.shader |
| Specular Blend | BS-glTF-Specular-Dither.shader |

<aside>
Why do we need custom shaders? And why dither instead of blend?

Beat Saber uses the alpha channel in the shader for a screen-space glow effect as far as I can tell. Basically, this means that the game will draw white with a fuzzy colored outline like you see on the sabers when the alpha channel is used. Default shaders write 1 to the alpha channel or use the texture alpha, causing them to glow in-game.

Dithering is an effect that discards individual pixels to allow transparency without the alpha channel. It doesn't look as good for semi-opaque parts, but that's the best we can do in Beat Saber because of the glow effect using the alpha channel.
</aside>

## Configure your avatar

With the model successfully imported and shaders overridden, the remaining steps mostly follow the [official custom avatar guide](https://bsmg.wiki/models/avatars-guide.html), but there are still a few differences for ReadyPlayerMe avatars.

### Add your avatar to the scene

![](https://ajlende.blog/wp-content/uploads/2021/09/4.1-replace-model.jpg)

Delete the old avatar from the scene and drag your custom model from the Project panel to where the old avatar was in the Hierarchy panel.

### Add the Animator component

![](https://ajlende.blog/wp-content/uploads/2021/08/4.2-animator-component.jpg)

Select your model in the Hierarchy panel and in the Inspector panel add an Animator component (not to be confused with the Animation component) by clicking the Add Component button at the bottom of the panel and searching for Animator.

Then drag the ReadyPlayerMeAvatar from the Project panel into the Avatar section of the newly added Animator component. The next two components take advantage of the Animator component, so make sure you get it set up first.

### Set up the VRIK Manager

![](https://ajlende.blog/wp-content/uploads/2021/08/4.3-vrik-manager-component.jpg)

In the same way you added the Animator component, also add a VRIK Manager component. The default values for the component are fine.

Depending on your model, you may need to adjust the positioning of the Head, Right Hand, Left Hand, Left Leg, Right Leg, and Pelvis GameObjects. It's helpful to position them in orthographic mode by using the [Scene Gizmo](https://docs.unity3d.com/Manual/SceneViewNavigation.html) in the top right of the Scene panel.

The head should be positioned slightly in front of the eyes. The hands can be positioned using the saber gizmos—make sure they are enabled in the Gizmos menu in the top right of the Scene panel if you don't see them. The pelvis and feet are only used if you have full-body tracking. You can use the template model as a reference for where they should be positioned.

For the model I used in this guide I only had to adjust three of the positions compared to the template model. 

| GameObject | X | Y | Z |
|---|---|---|---|
| Head | 0 | 1.6288 | 0.1554 |
| Right Hand | 0.428 | 0.9508 | 0.171 |
| Left Hand | -0.428 | 0.9508 | 0.171 |

### Pose the hands

![](https://ajlende.blog/wp-content/uploads/2021/08/4.4.1-pose-manager.jpg)

Next, add the Pose Manager component to your model the same as the other components. And first thing after adding the component, click the Save Open Hands Pose button and look for the green check mark.

![](https://ajlende.blog/wp-content/uploads/2021/08/4.4.2-hand-pose.jpg)

Next, use the rotation tool on each of the fingers of the right hand as seen in the Hierarchy panel. I find it helpful to use the orthographic view again and align with the saber and the back of the hand.

![](https://ajlende.blog/wp-content/uploads/2021/09/4.4.3-left-hand-pose.jpg)

Once you're happy with how the fingers on the right hand look, go back to the Pose Manager component on your model with all the buttons. Click the Mirror Right Hand Pose button to copy over the changes to the left hand, and then click the Save Closed Hands Pose and look for the green check mark.

### Configure lighting (Optional)

By default, the TemplateReadyPlayerMe scene has two lights to illuminate the model. You can optionally adjust those lights however you like or add new lights—they will be exported with the avatar. Be aware that adding too many lights will reduce performance, and there is a hard limit to the number of lights that Unity will render, depending on quality settings.

<aside>
Why are the lights being exported?

If you've used other custom avatars before with the default custom avatar shaders, you might find it strange that the lights for the scene are included within the exported GameObject. This is because the glTF shaders still rely on the scene lights to function. It has the convenient side-effect that you can position and color the lights however you like within the Scene panel, but you have to make sure the lights are exported.
</aside>

## Export from Unity

Everything is nearly ready—just a few more steps.

### Configure first person exclusion

![](https://ajlende.blog/wp-content/uploads/2021/08/5.1-first-person-exclusion.jpg)

At this point, if you ever want to use the first-person mode, you'll want to add the meshes that make up the head to the First Person Exclusion component on the TemplateReadyPlayerMe GameObject.

ReadyPlayerMe models have at least five head mesh parts and maybe more, depending on the accessories that you choose. Set the Size field to the number of head mesh parts your model has. Then, drag each of the head mesh parts into the numbered elements.

### Set the Avatar Descriptor

![](https://ajlende.blog/wp-content/uploads/2021/09/5.2-avatar-descriptor.jpg)

You'll want to add a unique name to the model that you create, and add your name as the author.

Because of the model's [CC BY-NC-SA 4.0 license](https://creativecommons.org/licenses/by-nc-sa/4.0/), if you plan to upload it anywhere (like [ModelSaber](https://modelsaber.com/)) it's probably a good idea to include a note of where the model was sourced from: "Model by ReadyPlayerMe" or "Model by Wolfprint 3D" in the Author field.

### Update the cover image

![](https://ajlende.blog/wp-content/uploads/2021/08/5.3-cover-image.jpg)

Next up is updating the cover image. Just select the Main Camera in the Hierarchy panel, scroll down to the Cover Helper component, and click the Capture button.

The resulting cover image looks dark compared to what's shown in the Scene panel. Something in the Cover Helper script needs to be updated to fix that. If the darkness bothers you, you can manually screenshot the scene and use that image instead.

### Exporting for Beat Saber

![](https://ajlende.blog/wp-content/uploads/2021/08/5.4-export-1.jpg)

Finally, everything should be ready to go for export. I have my Avatar Exporter panel docked to the bottom right, but you may need to open it by going to Window > Avatar Exporter. Then you can just click the Export button and save it to CustomAvatars inside your Beat Saber folder (C:\Program Files\Steam\steamapps\common\Beat Saber\CustomAvatars for Steam on Windows).

## Closing Thoughts

ReadyPlayerMe avatars don't have bones for hair or clothing. So, unfortunately, you can't add dynamic bones to default imported model. If you want to add them, you'll have to create the bones in [Blender](https://www.blender.org/) or another 3D modeling program at which point you can just export .fbx like normal.

Facial animations can theoretically work—ReadyPlayerMe has blend shapes available—but I haven't taken the time to figure them out yet. The best place to go for now to learn about animations is the [official BSMB Custom Avatars Guide](https://bsmg.wiki/models/avatars-guide.html).

Lastly, if you have any issues with the code in this guide, feel free to comment or open [an issue](https://github.com/ajlende/BeatSaberCustomAvatars/issues/new/choose) on [my fork of the BeatSaberCustomAvatars project](https://github.com/ajlende/BeatSaberCustomAvatars/tree/readyplayerme) on GitHub. Thanks! 