import Root, { variants } from './item.svelte';
import Group from './item-group.svelte';
import Separator from './item-separator.svelte';
import Header from './item-header.svelte';
import Footer from './item-footer.svelte';
import Content from './item-content.svelte';
import Title from './item-title.svelte';
import Description from './item-description.svelte';
import Actions from './item-actions.svelte';
import Media, { variants as mediaVariants } from './item-media.svelte';

export {
	Root,
	Group,
	Separator,
	Header,
	Footer,
	Content,
	Title,
	Description,
	Actions,
	Media,
	variants,
	mediaVariants,
	//
	Root as Item,
	Group as ItemGroup,
	Separator as ItemSeparator,
	Header as ItemHeader,
	Footer as ItemFooter,
	Content as ItemContent,
	Title as ItemTitle,
	Description as ItemDescription,
	Actions as ItemActions,
	Media as ItemMedia,
	variants as itemVariants,
	mediaVariants as itemMediaVariants
};
