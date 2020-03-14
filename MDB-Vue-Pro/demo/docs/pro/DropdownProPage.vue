<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 style="margin: 0" class="grey-text"><strong>Dropdowns</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/components/dropdowns/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr class="mb-5" />
    <mdb-container class="mt-5">
      <h4 class="pb-1">Material dropdown</h4>
      <mdb-dropdown>
        <mdb-dropdown-toggle color="primary" slot="toggle">Material dropdown</mdb-dropdown-toggle>
        <mdb-dropdown-menu color="primary">
          <mdb-dropdown-item>Action</mdb-dropdown-item>
          <mdb-dropdown-item>Another action</mdb-dropdown-item>
          <mdb-dropdown-item>Something else here</mdb-dropdown-item>
          <div class="dropdown-divider"></div>
          <mdb-dropdown-item>Separated link</mdb-dropdown-item>
        </mdb-dropdown-menu>
      </mdb-dropdown>
      <h4 class="pt-4 pb-1">Color variations</h4>
      <mdb-dropdown>
        <mdb-dropdown-toggle color="danger" slot="toggle">Danger dropdown</mdb-dropdown-toggle>
        <mdb-dropdown-menu color="danger">
          <mdb-dropdown-item>Action</mdb-dropdown-item>
          <mdb-dropdown-item>Another action</mdb-dropdown-item>
          <mdb-dropdown-item>Something else here</mdb-dropdown-item>
          <div class="dropdown-divider"></div>
          <mdb-dropdown-item>Separated link</mdb-dropdown-item>
        </mdb-dropdown-menu>
      </mdb-dropdown>
      <mdb-dropdown>
        <mdb-dropdown-toggle color="warning" slot="toggle">Warning dropdown</mdb-dropdown-toggle>
        <mdb-dropdown-menu color="warning">
          <mdb-dropdown-item>Action</mdb-dropdown-item>
          <mdb-dropdown-item>Another action</mdb-dropdown-item>
          <mdb-dropdown-item>Something else here</mdb-dropdown-item>
          <div class="dropdown-divider"></div>
          <mdb-dropdown-item>Separated link</mdb-dropdown-item>
        </mdb-dropdown-menu>
      </mdb-dropdown>
      <mdb-dropdown>
        <mdb-dropdown-toggle color="info" slot="toggle">Info dropdown</mdb-dropdown-toggle>
        <mdb-dropdown-menu color="info">
          <mdb-dropdown-item>Action</mdb-dropdown-item>
          <mdb-dropdown-item>Another action</mdb-dropdown-item>
          <mdb-dropdown-item>Something else here</mdb-dropdown-item>
          <div class="dropdown-divider"></div>
          <mdb-dropdown-item>Separated link</mdb-dropdown-item>
        </mdb-dropdown-menu>
      </mdb-dropdown>
    </mdb-container>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbDropdown, mdbDropdownToggle, mdbDropdownMenu, mdbDropdownItem, mdbRow, mdbIcon } from 'mdbvue';

export default {
  name: 'DropdownPagePro',
  components: {
    mdbContainer,
    mdbDropdown,
    mdbDropdownToggle,
    mdbDropdownMenu,
    mdbDropdownItem,
    mdbIcon,
    mdbRow
  }
};
</script>

<style scoped>
</style>
