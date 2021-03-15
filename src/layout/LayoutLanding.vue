<template>
	<div>
		<app-layout-landing-header />

		<div data-spy="scroll" data-target=".main-header" data-offset="80">
			<router-view />
		</div>
	</div>
</template>

<script>
import LayoutLandingHeader from './LayoutLandingHeader';

export default {
	name: 'app-layout-landing',
	components: {
		'app-layout-landing-header': LayoutLandingHeader,
	},

};
</script>
