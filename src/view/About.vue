<template>
    <div id="app">
       <meta charset="utf-8">
       <meta name="viewport" content="width=device-width, initial-scale=1">
       <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
       <div class="jumbotron text-center">
          <h1>Crave-It</h1>
          <p>A platform to order home-food away from home.</p>
        </div>
        <div class="container-fluid">
           <h4>We are..</h4>
           <p>a small business set out to help individuals from all walks of life who stay away from their home, to connect with the home food. We run by our very eager, home-safe certified chefs who cook delicious yummy meals for your and your family to eradicate the home sickness. Trust us, we do our bit.</p>
        </div>
        <hr>
        <div class="container-fluid text-center bg-grey">
            <h2> Why choose us? </h2>
            <br>
            <b-card-group deck>
                <b-card
                   title="Home Food"
                   img-src="https://thumbs.dreamstime.com/z/house-home-food-icon-logo-design-element-can-be-used-as-as-complement-to-95624339.jpg"
                   img-alt="home food"
                   img-top
                   >
                        <b-card-text>Food that feels like home.</b-card-text>
                </b-card>    
                <b-card 
                   title="Certified Chef"
                   img-src="https://pictures.alignable.com/eyJidWNrZXQiOiJhbGlnbmFibGV3ZWItcHJvZHVjdGlvbiIsImtleSI6ImJ1c2luZXNzZXMvbG9nb3Mvb3JpZ2luYWwvNjI4NjM5NS9TY3JlZW4gU2hvdCAyMDE5LTEyLTExIGF0IDcuMjcuMzAgQU0ucG5nIiwiZWRpdHMiOnsiZXh0cmFjdCI6eyJsZWZ0Ijo2LCJ0b3AiOjUsIndpZHRoIjo0NDYsImhlaWdodCI6NDYxfSwicmVzaXplIjp7IndpZHRoIjoxNzgsImhlaWdodCI6MTgyfSwiZXh0ZW5kIjp7InRvcCI6MCwiYm90dG9tIjowLCJsZWZ0IjowLCJyaWdodCI6NSwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0="
                   img-alt="Chef"
                   img-top
                >
                        <b-card-text>Our chefs have passed kitchen safe standards to ensure you get nothing but healthy food.</b-card-text>
                </b-card>
                <b-card
                   title="International Cuisine"
                   img-src="https://thumbs.dreamstime.com/z/international-food-fork-plate-knife-isolated-world-17390585.jpg"
                   img-alt="International"
                   img-top
                   >
                        <b-card-text>Authentic foreign food from locals? Yup! We got that covered.</b-card-text>
                </b-card>
            </b-card-group>
        </div>
    </div>
</template>

<script>
export default {
    name: 'about',
    components: {
        
    }
}
</script>