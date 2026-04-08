<script lang="ts">
	import * as Pagination from './index.js';
	import { Button } from '$lib/components/ui/button/index.js';
</script>

<Pagination.Root count={30} perPage={10}>
	<Pagination.Content>
		<Pagination.Item><Button variant="ghost" size="sm">Previous</Button></Pagination.Item>
		<Pagination.Item><Button variant="outline" size="icon">1</Button></Pagination.Item>
		<Pagination.Item><Button variant="ghost" size="sm">Next</Button></Pagination.Item>
	</Pagination.Content>
</Pagination.Root>
