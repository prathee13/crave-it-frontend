<template>
  <mdb-container>
    <mdb-row>
      <mdb-col md="8" class="mx-auto">
        <mdb-jumbotron class="mt-5">
          <h1><mdb-icon icon="code" class="grey-text" /> Sections</h1>
          <h6 class="my-3">INTROS</h6>
          <mdb-list-group>
            <!-- FREE -->
            <mdb-nav-item class="list-group-item list-group-item-action" router href="/sections/app">
              <h5 class="justify-content-between d-flex align-items-center">
                App intro <mdb-icon icon="angle-right"/>
              </h5>
            </mdb-nav-item>
            <mdb-nav-item class="list-group-item list-group-item-action" router href="/sections/contactform">
              <h5 class="justify-content-between d-flex align-items-center">
                Contact Form intro  <mdb-icon icon="angle-right"/>
              </h5>
            </mdb-nav-item>
            <mdb-nav-item class="list-group-item list-group-item-action" router href="/sections/classic">
              <h5 class="justify-content-between d-flex align-items-center">
                Classic Register Form intro <mdb-icon icon="angle-right"/>
              </h5>
            </mdb-nav-item>
            <mdb-nav-item class="list-group-item list-group-item-action" router href="/sections/video">
              <h5 class="justify-content-between d-flex align-items-center">
                Video Background intro <mdb-icon icon="angle-right"/>
              </h5>
            </mdb-nav-item>
          </mdb-list-group>
          <!-- PRO -->
          <h6 class="my-3">SECTIONS</h6>
          <mdb-list-group>
            <mdb-nav-item class="list-group-item list-group-item-action" router href="/sections/contact">
              <h5 class="justify-content-between d-flex align-items-center">
                Contact <mdb-icon icon="angle-right"/>
              </h5>
            </mdb-nav-item>
            <mdb-nav-item class="list-group-item list-group-item-action" router href="/sections/blog">
              <h5 class="justify-content-between d-flex align-items-center">
                Blog <mdb-icon icon="angle-right"/>
              </h5>
            </mdb-nav-item>
            <mdb-nav-item class="list-group-item list-group-item-action" router href="/sections/e-commerce">
              <h5 class="justify-content-between d-flex align-items-center">
                E-commerce <mdb-icon icon="angle-right"/>
              </h5>
            </mdb-nav-item>
            <mdb-nav-item class="list-group-item list-group-item-action" router href="/sections/features">
              <h5 class="justify-content-between d-flex align-items-center">
                Features <mdb-icon icon="angle-right"/>
              </h5>
            </mdb-nav-item>
            <mdb-nav-item class="list-group-item list-group-item-action" router href="/sections/magazine">
              <h5 class="justify-content-between d-flex align-items-center">
                Magazine <mdb-icon icon="angle-right"/>
              </h5>
            </mdb-nav-item>
            <mdb-nav-item class="list-group-item list-group-item-action" router href="/sections/projects">
              <h5 class="justify-content-between d-flex align-items-center">
                Projects <mdb-icon icon="angle-right"/>
              </h5>
            </mdb-nav-item>
            <mdb-nav-item class="list-group-item list-group-item-action" router href="/sections/social">
              <h5 class="justify-content-between d-flex align-items-center">
                Social <mdb-icon icon="angle-right"/>
              </h5>
            </mdb-nav-item>
            <mdb-nav-item class="list-group-item list-group-item-action" router href="/sections/team">
              <h5 class="justify-content-between d-flex align-items-center">
                Team <mdb-icon icon="angle-right"/>
              </h5>
            </mdb-nav-item>
            <mdb-nav-item class="list-group-item list-group-item-action" router href="/sections/testimonials">
              <h5 class="justify-content-between d-flex align-items-center">
                Testimonials <mdb-icon icon="angle-right"/>
              </h5>
            </mdb-nav-item>
            <mdb-nav-item class="list-group-item list-group-item-action" router href="/sections/testimonials-multi">
              <h5 class="justify-content-between d-flex align-items-center">
                Testimonials Multi Item<mdb-icon icon="angle-right"/>
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
  name: 'SectionsPage',
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
