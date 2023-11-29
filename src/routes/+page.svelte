<script>
    import { Timeline, TimelineItem, TimelineItemVertical, TimelineItemHorizontal, TimelineHorizontal, Activity, ActivityItem, Group, GroupItem } from 'flowbite-svelte';
    import { Button, Dropdown, DropdownItem, DropdownDivider, DropdownHeader, Alert } from 'flowbite-svelte';
    import { ChevronDownSolid, ChevronRightSolid } from 'flowbite-svelte-icons';
  
    let timeline = [
      'X protocol updated by Steve', 
      'Y machine checked out by Dane at <time> until <time>',
      'Z material used by experiment',
    ]
  
    /*
    data management home page should have a graph like obsidian connections of samples and results
    
    */
  </script>
  
  <div class="ugh">
  <div id="quick-actions">
  <Button>Run Protocol<ChevronDownSolid class="w-3 h-3 ml-2 text-white dark:text-white" /></Button>
  <Dropdown>
    <div slot="header" class="px-4 py-2">
      <span class="block text-sm text-gray-900 dark:text-white">Based on active papers</span>
    </div>
    <DropdownItem><a href="experiment">Butterball formation</a></DropdownItem>
    <DropdownItem>Lab Cleanup</DropdownItem>
    <DropdownItem>Arabinoxylan fermentation</DropdownItem>
  </Dropdown>
  <Button href="lab">View Lab<ChevronRightSolid class="w-3 h-3 ml-2 text-white dark:text-white" /></Button>
  </div>
  
  <br>
  <div>
  <Alert color="blue">
    <span class="font-medium">Info</span>
    Protocols you have used recently have been updated
  </Alert>
  
  <Alert color="green">
    <span class="font-medium">Complete</span>
    Steve has reviewed your latest notebook entry
  </Alert>
  
  <Alert color="yellow">
    <span class="font-medium">Warning</span>
    Your notebook entries have less than x words
  </Alert>
  
  <Alert color="yellow">
    <span class="font-medium">Warning</span>
    Your notebook entry -x- has no associated data or attachments
  </Alert>
  </div>
  
  <!-- <notebook>
  
    mistakes:
    - spilled x inventory
    - had to reread data n times
  
  </notebook> -->
  
  <br>
  
  <div>
  <Timeline>
    <TimelineItem title="Breaking protocol changes" date="February 2022">
      <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        Dane marked Protocol 23123 as in need of a Major update. This affects x previous runs of the protocol, and x results.
      </p>
      <Button color="alternative"
        >See details<svg
          class="ml-2 w-3 h-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          ><path
            fill-rule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clip-rule="evenodd" /></svg
        ></Button>
    </TimelineItem>
    <TimelineItem title="Dexter's lab onboarded two new scienties" date="March 2022">
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">
        Welcome Mandark and Dee Dee to Dexter's lab
      </p>
    </TimelineItem>
    <TimelineItem title="Mav Reserved Large Hadron Collider" date="April 2022">
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">
        The <a href="">Large Hadron Collider</a> has been reserved indefinitely. 
      </p>
    </TimelineItem>
  </Timeline>
  </div>
  </div>
  <style>
    .ugh {padding-left: 8em; padding-right:8em;}
    #quick-actions {
      padding: 2em;
      right: 50%;
    }
  </style>