<script>
    import { Label, Input } from 'flowbite-svelte';
    import { Button, Select} from 'flowbite-svelte';

    let selected;
    let projects = [
        { value: 'DOE', name: "Department of Energy" },
        { value: 'Olipop', name: "Olipop" }
    ]
    let other = [
        { value: 'Su2023', name: "Summer 2023" },
        { value: 'Fa2023', name: "Fall 2023" },
        { value: 'Sp2024', name: "Spring 2024" }
    ]
  </script>
  
  <div class="grid-container">
      <div class="mb-6 item1">
        <Label for="default-input" class="block mb-2">user</Label>
        <Input id="default-input" size="sm" placeholder="dane" />
        <br>
        <Label for="default-input" class="block mb-2">db_uri</Label>
        <Input id="default-input" size="sm" placeholder="mongodb://root:24tCWIJerAGydzi5@mongoback:27017" />
        <br>
        <Label for="default-input" class="block mb-2">port</Label>
        <Input id="default-input" size="sm" placeholder="27017" />
        <br>
        <div class="mb-6 text-black/60 item3">
        <div class="mb-2 text-sm text-white/60"><Label>Default Project</Label></div>
            <Select class="mt-2 random-val" items={projects} bind:values={selected} placeholder="Olipop"/>
      </div>
      </div>
      <div class="mb-6 item2">
        <Label for="default-input" class="block mb-2">db</Label>
        <Input id="default-input" size="sm" placeholder="toad_test" />
        <br>
        <Label for="default-input" class="block mb-2">lab</Label>
        <Input id="default-input" size="sm" placeholder="Lindemann" />
        <br>
        <Label for="default-input" class="block mb-2">source</Label>
        <Input id="default-input" size="sm" placeholder="Gut" />
        <br>
        <div class="mb-6 text-black/60 item3">
          <div class="mb-2 text-sm text-white/60"><Label>Project Period</Label></div>
              <Select class="mt-2 random-val" items={other} bind:values={selected} placeholder="Fall 2023"/>
        </div>
      </div>
  </div>
  
  <div class="bg-green-500">
      <Button color="purple" class="w-100 h-3.5 me-2">Update Configuration</Button>
  </div>

  <style>
    .random-val {
        color: blue;
    }
    .grid-container {
		display: grid;
		column-gap: 10px;
		row-gap: 0px;
	}
	.item1 {
		grid-column-start: 1;
		grid-column-end: 2;
        grid-row-start: 1;
		grid-row-end: 2;
	}
	.item2 {
		grid-column-start: 2;
		grid-column-end: 2;
		grid-row-start: 1;
		grid-row-end: 1;
	}
	.item3 {
		grid-column-start: 1;
		grid-column-end: 1;
		grid-row-start: 2;
		grid-row-end: 2;
	}
	.item4 {
		grid-column-start: 2;
		grid-column-end: 2;
		grid-row-start: 2;
		grid-row-end: 2;
	}
  </style>