<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6">
        <div class="d-flex justify-content-center">
          <img
            src="https://images.unsplash.com/photo-1474224348275-dd142b14f8c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hpcCUyMGh1bGx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
            alt="ship hull"
            class="img-clamp"
          />
        </div>
      </div>
      <div class="col-md-3">
        <div>
          Ship stats:
          <ul>
            <li>Speed</li>
            <li>Attack</li>
            <li>Finishing blows</li>
            <li>Wins</li>
          </ul>
        </div>
      </div>

      <div class="col-md-3">
        <div class="row">
          <div class="col-6 my-3">
            <div class="p-3 bg-secondary">Hull</div>
          </div>
          <div class="col-6 my-3">
            <div class="p-3 bg-secondary">Cannons</div>
          </div>
        </div>
        <div class="row">
          <div class="col-6 my-3">
            <div class="p-3 bg-secondary">Sails</div>
          </div>
          <div class="col-6 my-3">
            <div class="p-3 bg-secondary">Crew</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
.img-clamp {
  max-width: 100%;
  height: auto;
}
</style>