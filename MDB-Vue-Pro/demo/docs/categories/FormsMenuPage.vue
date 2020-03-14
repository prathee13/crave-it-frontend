<template>
  <mdb-container>
    <mdb-row>
      <mdb-col md="8" class="mx-auto">
        <mdb-jumbotron class="mt-5">
          <h1 class="pb-2"><mdb-icon icon="edit" class="grey-text mr-2" />Forms</h1>
          <h6 class="my-3">FREE</h6>
          <mdb-list-group>
          <!-- FREE -->
          <mdb-nav-item class="list-group-item list-group-item-action" router href="/forms/forms">
            <h5 class="justify-content-between d-flex align-items-center">
              Forms <mdb-icon icon="angle-right"/>
            </h5>
          </mdb-nav-item>
          <mdb-nav-item class="list-group-item list-group-item-action" router href="/forms/inputs">
              <h5 class="justify-content-between d-flex align-items-center">
                Input <mdb-icon icon="angle-right"/>
              </h5>
            </mdb-nav-item>
          <mdb-nav-item class="list-group-item list-group-item-action" router href="/forms/search">
              <h5 class="justify-content-between d-flex align-items-center">
                Search <mdb-icon icon="angle-right"/>
              </h5>
          </mdb-nav-item>
          <mdb-nav-item class="list-group-item list-group-item-action" router href="/forms/validation">
            <h5 class="justify-content-between d-flex align-items-center">
              Validation<mdb-icon icon="angle-right"/>
            </h5>
          </mdb-nav-item>

          </mdb-list-group>
          <!-- PRO -->
          <h6 class="my-3">PRO</h6>
          <mdb-list-group>
            <mdb-nav-item class="list-group-item list-group-item-action" router href="/forms/pro/autocomplete">
              <h5 class="justify-content-between d-flex align-items-center">
                Autocomplete <mdb-icon icon="angle-right"/>
              </h5>
            </mdb-nav-item>
            <mdb-nav-item class="list-group-item list-group-item-action" router href="/advanced/pro/datepicker">
              <h5 class="justify-content-between d-flex align-items-center">
                DatePicker <mdb-icon icon="angle-right"/>
              </h5>
            </mdb-nav-item>
            <mdb-nav-item class="list-group-item list-group-item-action" router href="/forms/pro/forms">
              <h5 class="justify-content-between d-flex align-items-center">
                Forms <mdb-icon icon="angle-right"/>
              </h5>
            </mdb-nav-item>
            <mdb-nav-item class="list-group-item list-group-item-action" router href="/forms/pro/inputs">
              <h5 class="justify-content-between d-flex align-items-center">
                Input <mdb-icon icon="angle-right"/>
              </h5>
            </mdb-nav-item>
            <mdb-nav-item class="list-group-item list-group-item-action" router href="/forms/pro/multiselect">
              <h5 class="justify-content-between d-flex align-items-center">
                Multiselect <mdb-icon icon="angle-right"/>
              </h5>
            </mdb-nav-item>
            <mdb-nav-item class="list-group-item list-group-item-action" router href="/forms/pro/search">
              <h5 class="justify-content-between d-flex align-items-center">
                Search <mdb-icon icon="angle-right"/>
              </h5>
            </mdb-nav-item>
            <mdb-nav-item class="list-group-item list-group-item-action" router href="/forms/pro/select">
              <h5 class="justify-content-between d-flex align-items-center">
                Select <mdb-icon icon="angle-right"/>
              </h5>
            </mdb-nav-item>
            <mdb-nav-item class="list-group-item list-group-item-action" router href="/advanced/pro/timepicker">
              <h5 class="justify-content-between d-flex align-items-center">
                TimePicker <mdb-icon icon="angle-right"/>
              </h5>
            </mdb-nav-item>
          </mdb-list-group>
        </mdb-jumbotron>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbIcon, mdbJumbotron, mdbNavItem, mdbListGroup } from 'mdbvue';

export default {
  name: 'ComponentsPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon,
    mdbJumbotron,
    mdbNavItem,
    mdbListGroup
  }
};
</script>

<style scoped>
.example-components-list {
  padding-top: 20px;
}

.example-components-list li {
  padding: 10px;
  background-color: white;
  border-bottom: 1px solid #f7f7f7;
  transition: .3s;
}

.example-components-list h6 {
  padding: 20px 10px 5px 10px;
  color: grey;
}

.example-components-list li:hover {
  background-color: #fafafa;
}

.example-components-list i {
  float: right;
  padding-top: 3px;
}

.nav-link.navbar-link h5 {
  color: #212529;
}
</style>
