<template>
    <div>
      <h1 class="text-center">{{ article.title }}</h1>
      <v-container>
        <v-img :src="article.image" alt="Article Image" height="300px" class="mb-4" />
        <p>{{ article.date }}</p>
        <p v-html="article.content"></p>
      </v-container>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ArticleView',
    data() {
      return {
        articles: [
          {
            id: 1,
            title: 'Čo by ste mali vedieť o CSS',
            date: '15. január 2024',
            content: `
              
              <p>CSS (Cascading Style Sheets) je základným stavebným prvkom moderného webového dizajnu. Jeho cieľom je odlíšiť obsah (HTML) od vzhľadu stránky a poskytnúť nástroje na vytváranie esteticky príjemných a responzívnych webových aplikácií. V tomto článku preskúmame jeho históriu, techniky a moderné nástroje, ktoré nám pomáhajú spravovať štýly efektívnejšie.</p>
              
              
              <p>CSS bolo pôvodne navrhnuté ako spôsob, ako oddeliť štruktúru HTML od vizuálnych vlastností. Postupne sa rozvinulo do komplexného nástroja, ktorý umožňuje vývojárom ovládať takmer všetky aspekty vzhľadu webovej stránky. Medzi kľúčové vlastnosti patria:</p>
              <ul>
                <li><strong>Flexbox:</strong> Ideálny na tvorbu flexibilných a responzívnych layoutov.</li>
                <li><strong>CSS Grid:</strong> Presný systém na usporiadanie prvkov v mriežke.</li>
                <li><strong>Animácie:</strong> Oživenie stránky prostredníctvom prechodov, transformácií a kľúčových snímok.</li>
              </ul>
              <p>Moderné vývojárske nástroje ako <strong>Sass</strong> alebo <strong>LESS</strong> umožňujú efektívnejšiu prácu s CSS. Tieto predprocesory prinášajú pokročilé funkcie, ako sú premenné, mixiny a funkcie, ktoré zlepšujú opakovateľnosť a správu kódu.</p>
              
              <h2>Záver</h2>
              <p>CSS je neoddeliteľnou súčasťou webového vývoja. Učenie sa jeho základov je kľúčom k vytváraniu profesionálnych webových stránok. Postupným osvojovaním pokročilých techník, ako sú responzívny dizajn, animácie a práca s predprocesormi, môžete svoje schopnosti výrazne rozšíriť. Svet CSS neustále napreduje, a preto je dôležité držať krok s najnovšími trendmi.</p>
            `,
            image: new URL('@/assets/blog1.jpg', import.meta.url).href,
          },
          {
            id: 2,
            title: 'Najlepšie JavaScriptové frameworky v roku 2025',
            date: '22. január 2023',
            content: `
              
              <p>JavaScriptové frameworky dominujú svetu moderného vývoja webových aplikácií. Rok 2025 prináša vylepšenia a inovácie, ktoré posúvajú hranice toho, čo je možné dosiahnuť. Tento článok sa zameriava na najpopulárnejšie frameworky: Vue.js, React a Svelte.</p>
              
              
              <h3>Vue.js</h3>
              <p>Vue.js je obľúbený pre svoju jednoduchosť a flexibilitu. S jeho pomocou môžu vývojári vytvárať interaktívne a responzívne aplikácie s minimálnym úsilím. Jeho ekosystém zahŕňa nástroje ako Vue Router a Pinia, ktoré uľahčujú správu stavu a navigáciu.</p>
              
              <h3>React</h3>
              <p>React, vyvinutý spoločnosťou Facebook, je preferovanou voľbou pre veľké projekty. Jeho zameranie na komponenty a výkonnosť z neho robí ideálny nástroj pre komplexné aplikácie. React má obrovskú komunitu a ekosystém, ktorý vývojárom poskytuje množstvo zdrojov.</p>
              
              <h3>Svelte</h3>
              <p>Svelte sa odlišuje od tradičných frameworkov svojím prístupom. Kompiluje kód počas build procesu, čo vedie k rýchlym a efektívnym aplikáciám s minimálnou runtime záťažou.</p>
              
              <h2>Záver</h2>
              <p>Každý z týchto frameworkov ponúka jedinečné výhody. Výber správneho nástroja závisí od potrieb vášho projektu. Nech už si vyberiete ktorýkoľvek framework, učenie JavaScriptu je základom pre úspešný vývoj moderných webových aplikácií.</p>
            `,
            image: new URL('@/assets/blog2.jpg', import.meta.url).href,
          },
        ],
        article: null,
      };
    },
    created() {
      const articleId = parseInt(this.$route.params.id);
      this.article = this.articles.find((article) => article.id === articleId);
    },
  };
  </script>
  
  <style>
  .text-center {
    text-align: center;
  }
  .mb-4 {
    margin-bottom: 16px;
  }
  </style>
  