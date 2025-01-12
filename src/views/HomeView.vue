<template>
  <div>
    <!-- Banner -->
    <div class="container-fluid p-0">
  <!--<img :src="bannerImage" alt="Virtuálna Komunita" class="img-fluid banner-image" />-->
</div>


<br>
<br>
    <div class="container text-center my-5 bg-light shadow-sm rounded py-5" style="background: linear-gradient(135deg, #e8f3ff, #f7e8ff);">
  <h1 class="display-3 text-primary font-weight-bold">Vitajte na Virtuálna Komunita</h1>
  <p class="lead text-dark">
    Spoznajte našu platformu pre virtuálne podujatia, vzdelávanie a viac!
  </p>
</div>

    <!-- O nás -->
    <div class="container my-5">
      <h2 class="text-center mb-4">O nás</h2>
      <p class="text-center text-white" style="font-size: 1.5rem; font-weight: bold;">Virtuálna Komunita je miesto, kde môžete nájsť najnovšie online podujatia, vzdelávacie blogy a skvelé produkty na podporu vášho vzdelávania.</p>
    </div>

    <!-- Prečo si vybrať nás -->
    <div class="container my-5">
      <h2 class="text-center mb-4">Prečo si vybrať nás?</h2>
      <div class="row text-center">
        <div class="col-md-4 mb-4">
          <div class="card h-100 border-primary hover-effect">
            <div class="card-body">
              <div class="mb-3">
                <i class="bi bi-calendar-event h1 text-primary"></i>
              </div>
              <h5 class="card-title">Aktuálne udalosti</h5>
              <p class="card-text">
                Sledujte najnovšie online podujatia na jednom mieste:
                <ul class="list-unstyled">
                  <li><strong>20. január 2025</strong> - Workshop Vue.js</li>
                  <li><strong>10. február 2025</strong> - Základy Vuetify</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card h-100 border-success hover-effect">
            <div class="card-body">
              <div class="mb-3">
                <i class="bi bi-book h1 text-success"></i>
              </div>
              <h5 class="card-title">Vzdelávacie blogy</h5>
              <p class="card-text">
                Ponorte sa do inšpiratívnych článkov, ktoré odhaľujú tajomstvá moderných technológií, podnikateľských stratégií a inovatívneho vzdelávania.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card h-100 border-warning hover-effect">
            <div class="card-body">
              <div class="mb-3">
                <i class="bi bi-basket h1 text-warning"></i>
              </div>
              <h5 class="card-title">Produkty</h5>
              <p class="card-text">
                Objavte produkty, ktoré vás posunú ďalej. <br />
                <a href="/shop" class="btn btn-primary mt-2">Navštíviť obchod</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Najbližšie udalosti -->
    <div class="container my-5">
      <h2 class="text-center mb-4">Najbližšie udalosti</h2>
      <div class="row">
        <div class="col-md-6 mb-4">
          <div class="card hover-effect">
            <img :src="event1" class="card-img-top" alt="Workshop Vue.js" />
            <div class="card-body">
              <h5 class="card-title">Workshop Vue.js</h5>
              <p class="card-text">20. január 2025</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-4">
          <div class="card hover-effect">
            <img :src="event2" class="card-img-top" alt="Základy Vuetify" />
            <div class="card-body">
              <h5 class="card-title">Základy Vuetify</h5>
              <p class="card-text">10. február 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      bannerImage: new URL('@/assets/banner.jpg', import.meta.url).href,
      event1: new URL('@/assets/event1.jpg', import.meta.url).href,
      event2: new URL('@/assets/event2.jpg', import.meta.url).href,
    };
  },
};
</script>

<style>
/****** Custom Bootstrap Overrides ******/
.card {
  background-color: rgba(50, 0, 0, 0.8); /* Jemná tmavočervená s priehľadnosťou */
  color: #ffffff; /* Biely text pre dobrý kontrast */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Tieň pre hĺbku */
  border: 1px solid rgba(200, 50, 50, 0.6); /* Jemný bordový okraj */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5); /* Zvýraznenie pri hover */
}

.card-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: #ffdddd; /* Svetločervený odtieň pre titulky */
}

.card-text {
  color: #ffcccc; /* Jemnejšia červená pre text */
}

.hover-effect {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.hover-effect:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
.banner-image {
  height: 80vh; /* 40% výšky obrazovky */
  width: 100%;
  object-fit: cover;
  display: block;
}

</style>