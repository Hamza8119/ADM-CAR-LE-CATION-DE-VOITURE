<template>
    
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">
    <div class="container">
      <!-- Brand -->
      <div class="logo">
    <img src="./assets/images/logo10.jpg" alt="Logo" class="logo10">
  </div>


      <!-- Toggle Button for Small Screens -->
      <button
        class="navbar-toggler d-lg-none custom-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar for Large Screens -->
      <div class="collapse navbar-collapse d-none d-lg-block">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link active custom-link" href="#home">Accueil</a>
          </li>
          <li class="nav-item">
            <a class="nav-link custom-link" href="#car-catalogue">Catalogue</a>
          </li>
          <li class="nav-item">
            <a class="nav-link custom-link" href="#delivery">Livraison</a>
          </li>
          <li class="nav-item">
            <a class="nav-link custom-link" href="#contact-us">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link custom-link" href="#help">Aide</a>
          </li>
          <li class="nav-item">
            <router-link to="/Login"  class="nav-link custom-link">Se connecter</router-link>
          </li>


        </ul>
      </div>

      <!-- Offcanvas for Small Screens -->
      <div
        class="offcanvas offcanvas-end custom-offcanvas d-lg-none"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title custom-offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link custom-link" href="#home" data-bs-dismiss="offcanvas">Accueil</a></li>
            <li class="nav-item"><a class="nav-link custom-link" href="#car-catalogue" data-bs-dismiss="offcanvas">Catalogue</a></li>
            <li class="nav-item"><a class="nav-link custom-link" href="#delivery" data-bs-dismiss="offcanvas">Livraison</a></li>
            <li class="nav-item"><a class="nav-link custom-link" href="#contact-us" data-bs-dismiss="offcanvas">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>





    <section id="home" class="hero-section" :style="{ backgroundImage: 'url(' + heroImage + ')' }">
  <div class="hero-content">
    <h1>Bienvenue chez ADM Car Rental</h1>
  </div>
</section>


    <!-- Car Catalogue Section -->
    <section id="Notre catalogue de voitures" class="car-section">
      <h2>Our Car Catalogue</h2>
      <div class="car-grid">
        <CarCard v-for="(car, index) in cars" :key="index" :car="car" />
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="features-section">
      <h2 class="section-title">COMMENT ÇA MARCHE</h2>
      <div class="feature-grid">
        <div class="feature-icon">
          <i class="fas fa-thin fa-route"></i>
          <h4>Choisissez votre emplacement</h4>
          <p class="p-8">« Choisissez l'endroit qui vous convient le mieux pour récupérer votre voiture. Nous avons différentes options pour répondre à vos besoins. »</p>
        </div>
        <div class="feature-icon">
          <i class="fas fa-light fa-calendar-days"></i>
          <h4>Date de prise en charge</h4>
          <p class="p-8">« Choisissez la date et l'heure auxquelles vous souhaitez récupérer votre voiture de location. Notre planning flexible vous permet de prendre la route au moment qui vous convient le mieux. »</p>
        </div>
        <div class="feature-icon">
          <i class="fas fa-solid fa-car"></i>
          <h4>Book Your Car</h4>
          <p class="p-8">« Finalisez votre réservation en choisissant votre modèle de voiture préféré. Profitez d'un processus de réservation fluide et préparez-vous pour votre voyage. »</p>
        </div>
      </div>
    </section>

    <!-- قسم Comment ça fonctionne -->
    <section id="how-it-works">
      <h2>Comment ça fonctionne</h2>
      <p>Nous sommes ici pour rendre votre expérience de location de voiture simple et fluide. Suivez les étapes suivantes :</p>
      <ul>
        <li><strong>Choisissez votre voiture :</strong> Parcourez une large gamme de voitures disponibles.</li>
        <li><strong>Entrez vos informations :</strong> Remplissez le formulaire ci-dessous avec vos informations personnelles.</li>
        <li><strong>Réservez votre voiture :</strong> Après avoir soumis vos informations, vous recevrez une confirmation par e-mail.</li>
        <li><strong>Profitez de votre voyage :</strong> Profitez de votre voyage avec la voiture que vous avez choisie !</li>
      </ul>

      <!-- بطاقة نموذج العميل -->
      <div class="customer-form-card">
        <h3>Informations client</h3>
        <form @submit.prevent="submitForm">
          <label for="fullName">Nom complet :</label>
          <input type="text" id="fullName" v-model="customer.fullName" required />

          <label for="email">E-mail :</label>
          <input type="email" id="email" v-model="customer.email" required />

          <label for="country">Pays :</label>
          <input type="text" id="country" v-model="customer.country" required />

          <label for="phone">Numéro de téléphone :</label>
          <input type="tel" id="phone" v-model="customer.phone" required />

          <label for="message">Message :</label>
          <textarea id="message" v-model="customer.message" required></textarea>

          <button type="submit">Envoyer</button>
        </form>
      </div>
    </section>
    <section class="faq">
    <h2>Questions Fréquentes ❓</h2>
    <div class="faq-container">
        <div class="faq-item">
            <div class="faq-question">Quels services proposez-vous ?</div>
            <div class="faq-answer">Nous proposons des services de location de voitures, de vente de véhicules d'occasion, ainsi que des services de livraison à domicile.</div>
        </div>
        <div class="faq-item">
            <div class="faq-question">Comment puis-je réserver une voiture ?</div>
            <div class="faq-answer">Vous pouvez réserver une voiture directement sur notre site web ou en nous contactant par téléphone.</div>
        </div>
        <div class="faq-item">
            <div class="faq-question">Avez-vous des véhicules électriques disponibles ?</div>
            <div class="faq-answer">Oui, nous disposons d'une gamme de véhicules électriques respectueux de l'environnement.</div>
        </div>
        <div class="faq-item">
            <div class="faq-question">Proposez-vous des assurances pour les locations ?</div>
            <div class="faq-answer">Oui, toutes nos locations incluent une assurance de base avec des options supplémentaires disponibles.</div>
        </div>
        <div class="faq-item">
            <div class="faq-question">Quelles sont vos horaires d'ouverture ?</div>
            <div class="faq-answer">Nous sommes ouverts du lundi au samedi de 8h à 19h. Notre service en ligne est disponible 24/7.</div>
        </div>
        <div class="faq-item">
            <div class="faq-question">Puis-je modifier ou annuler une réservation ?</div>
            <div class="faq-answer">Oui, vous pouvez modifier ou annuler une réservation jusqu'à 24 heures avant la date prévue.</div>
        </div>
    </div>
</section>


    <section id="about-us" class="about-us-section">
      <div class="about-us-content">
        <img src="./assets/images/téléchargement.jpg" alt="سيارة جديدة" class="about-us-car" />
        <div class="about-us-text">
          <h2 class="about-us-title">À propos de nous</h2>
          <p>
            Nous, ADM Car, fournissons les meilleurs services de location de voitures à Agadir. Notre équipe de professionnels s'efforce de répondre aux besoins de ses clients en proposant une variété de voitures à des prix compétitifs.
          </p>
          <p>
            Notre entreprise vise à offrir une expérience de location fluide et agréable à tous nos clients. Nous comprenons que louer une voiture peut être une expérience stressante, c'est pourquoi nous sommes là pour garantir que le processus soit simple et pratique.
          </p>
          <p>
            Nous proposons une large gamme de voitures, des véhicules économiques aux voitures de luxe, pour répondre à tous vos besoins. Que vous ayez besoin d'une voiture pour un voyage d'affaires ou des vacances en famille, nous sommes là pour vous aider.
          </p>
          <p>
De plus, nous nous engageons à fournir un service client exceptionnel, avec une équipe d'assistance disponible 24 heures sur 24 pour répondre à toutes vos questions.
          </p>
          <p>
            Choisissez ADM Car pour une expérience de location unique et professionnelle. Nous avons hâte de vous servir !
          </p>
        </div>
      </div>
    </section>
    <!-- Section des statistiques -->
<section class="stats">
    <h2>Nos Réalisations en Chiffres 📊</h2>
    <div class="stats-container">
        <div class="stat-item">
            <div class="stat-number">500+</div>
            <div class="stat-description">Projets Réalisés</div>
        </div>
        <div class="stat-item">
            <div class="stat-number">300+</div>
            <div class="stat-description">Clients Satisfaits</div>
        </div>
        <div class="stat-item">
            <div class="stat-number">10+</div>
            <div class="stat-description">Années d'Expérience</div>
        </div>
        <div class="stat-item">
            <div class="stat-number">24/7</div>
            <div class="stat-description">Support Technique</div>
        </div>
    </div>
</section>


<footer>
    <div class="contact-info">
        <h3 class="h3-3">Contactez-nous</h3>
        
        <div class="contact-item">
    <a href="tel:+212528308387">
        <i class="fas fa-phone fax-icon"></i>
        <p class="p-14">+212528308387</p>
    </a>
</div>

        <div class="contact-item">
            <i class="fa-solid fa-envelope envelope-icon"></i>
            <p><a href="mailto:admcars2014@gmail.com">admcars2014@gmail.com</a></p>
        </div>
        <div class="contact-item">
    <i class="fa-solid fa-location-dot location-icon"></i>
    <p class="p-14"><a href="https://maps.google.com/?q=30.335381,-9.503521" target="_blank" class="map-link">Quartier Agdal 2 Bloc 5 N 681 Ait Melloul</a>
    </p>
</div>

    </div>
    
    <div class="social-media">
        <h3 class="h3-3">Suivez-nous</h3>
        <div class="contact-item">
    <a href="https://wa.me/212661385320" target="_blank">
        <i class="fa-brands fa-whatsapp whatsapp-icon"></i>
        <p class="p-14">+212661385320</p>
    </a>
</div>

        <div class="contact-item">
    <a href="https://wa.me/212634717609" target="_blank">
        <i class="fa-brands fa-whatsapp whatsapp-icon"></i>
        <p class="p-14">+212634717609</p>
    </a>
</div>

        <div class="contact-item">
            <i class="fa-brands fa-facebook facebook-icon"></i>
            <p class="p-14"><a href="https://www.facebook.com/admcar" target="_blank">Adm Car</a></p>
        </div>
        <div class="contact-item">
            <i class="fa-brands fa-instagram instagram-icon"></i>
            <p class="p-14"><a href="https://www.instagram.com/admcar" target="_blank">adm car</a></p>
        </div>
    </div>
    
    <div class="fin">
        <img src="./assets/images/logo10.jpg" alt="" class="logo10">
        <p class="p-9">Enjoy a unique experience with our high-quality cars at affordable prices, as we offer you special offers this month, with excellent service and our dedicated team is always ready to provide a comfortable and smooth rental experience. Read the reviews of our satisfied customers to discover the value of our services.</p>
    </div>
</footer>


<p class="p-10">&copy; Location de voitures ADM 2025. Tous droits réservés.</p>



  </div>
</template>

<script>
import CarCard from './components/CarCard.vue';


// Import car images
import heroImage from './assets/images/SIMO2.jpg'; // تأكد من مسار الصورة
import image1 from './assets/images/JEEP1.jpg';
import image2 from './assets/images/HYUNDAI.jpg';
import image3 from './assets/images/fiat6.jpg';
import image4 from './assets/images/2020-Dacia.jpg';
import image5 from './assets/images/CLIO1.jpg';
import image6 from './assets/images/Ofertas-Peugeot.jpg';
import image7 from './assets/images/FORD2.jpg';
import image8 from './assets/images/citroen1.jpg';
import image9 from './assets/images/FIAT-PETIT1.jpg';
import image11 from './assets/images/Dacia Sandero Stepway.jpg';

import image10 from './assets/images/logo10.jpg';
import Login from './views/Login.vue';


export default {
  setup() {
  

    

    return {
      heroImage,
      customer: {
        fullName: '',
        email: '',
        country: '',
        phone: '',
        message: '',
      },
      cars: [
        { name: 'Jeep Wrangler', src: image1, price: 500, type: 'Normal', model: 'Wrangler', stars: 5 },
        { name: 'Hyundai Sonata', src: image2, price: 600, type: 'Economic', model: 'Sonata', stars: 4 },
        { name: 'Fiat X 500', src: image3, price: 400, type: 'Normal', model: '500', stars: 3 },
        { name: 'Dacia Sandero', src: image4, price: 300, type: 'Economic', model: 'Logan', stars: 4 },
        { name: 'Renault Clio', src: image5, price: 350, type: 'Normal', model: 'Clio', stars: 4 },
        { name: 'Peugeot 208', src: image6, price: 450, type: 'Economic', model: '208', stars: 5 },
        { name: 'Ford Fiesta', src: image7, price: 400, type: 'Normal', model: 'Fiesta', stars: 5 },
        { name: 'Citroen C3', src: image8, price: 370, type: 'Economic', model: 'C3', stars: 4 },
        { name: 'Fiat 500', src: image9, price: 370, type: 'Economic', model: 'C3', stars: 4 },
        { name: 'Dacia Stepway', src: image11, price: 370, type: 'Economic', model: '2022', stars: 4 },
      ],
    };
  },
  components: {
    CarCard,
    Login,
  },
  methods: {
    submitForm() {
      // Logic to handle form submission, e.g., sending data to a server
      console.log('Form submitted:', this.customer);
      // Reset the form after submission
      this.customer = {
        fullName: '',
        email: '',
        country: '',
        phone: '',
        message: '',
      };
    },
  },
};
document.addEventListener('click', (event) => {
  const mobileMenu = document.querySelector('.mobile-menu');
  const icon = document.querySelector('.icon3');
  if (icon && icon.contains(event.target)) {
    mobileMenu.classList.toggle('active'); // تفعيل أو إلغاء الكلاس عند الضغط
  } else if (mobileMenu && !mobileMenu.contains(event.target)) {
    mobileMenu.classList.remove('active'); // إغلاق القائمة عند الضغط خارجها
  }
});



</script>
<style>
  #app {
  font-family: Arial, sans-serif;
  overflow: hidden; /* إخفاء شريط التمرير */
}


/* تنسيق الصورة داخل الـ logo */
.logo10 {
  max-width: 100%; /* جعل الصورة تتناسب مع العرض */
  height: auto; /* الحفاظ على النسبة الأصلية للصورة */

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* إضافة تأثير الظل للصورة */
}

* {
  -ms-overflow-style: none;  /* إخفاء شريط التمرير في متصفح Internet Explorer */
  scrollbar-width: none; /* إخفاء شريط التمرير في Firefox */
}

*::-webkit-scrollbar {
  display: none; /* إخفاء شريط التمرير في المتصفحات التي تستخدم WebKit (مثل Chrome و Safari) */
}


/* Custom Navbar Styles */
.custom-navbar {
  background: linear-gradient(135deg, #763b3b, #300505, #1a1a2e, #a8b8b4);
  background-size: 400% 400%;
  animation: gradientAnimation 4s ease infinite; /* Gradient animation */
  padding: 6px 0;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4); /* Box-shadow effect */
  border-radius: 40% 0% 45% 0%; /* Rounded corners */
  opacity: 0.91; /* Fully visible */
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes gradientAnimation {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
/* Logo Style */
.custom-logo {
  font-size: 22px;
  font-weight: bold;
  color: #ffffff;
  transition: color 0.3s ease-in-out, transform 0.3s ease; /* إضافة تأثير التحول */
}

.custom-logo:hover {
  color: black; /* تغيير اللون إلى أحمر فاتح عند التمرير */
  transform: scale(1.1); /* تأثير تكبير عند التمرير */
}

/* Navbar Links */
.custom-link {
  color: #ffffff;
  font-size: 16px;
  margin: 0 12px;
  position: relative;
  transition: all 0.3s ease-in-out;
}

.custom-link::after {
  content: "";
  position: absolute;
  width: 0%;
  height: 2px;
  bottom: -5px;
  left: 50%;
  background: #ff6347; /* لون أحمر فاتح */
  transition: all 0.3s ease-in-out;
}

.custom-link:hover::after {
  width: 100%;
  left: 0;
}

.custom-link:hover {
  color: #ff6347; /* تغيير اللون عند التمرير */
  filter: brightness(1.2); /* إضافة تأثير السطوع عند التمرير */
}

/* Offcanvas Styling */
.custom-offcanvas {
  background: #1a1a2e;
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3); /* إضافة تأثير box-shadow */
  border-radius: 10px; /* إضافة حواف دائرية */
  padding: 20px; /* تحسين المسافات */
}

.custom-offcanvas-title {
  font-size: 20px;
  font-weight: bold;
  color: #ff6347; /* استخدام اللون الأحمر الفاتح */
  transition: color 0.3s ease;
}

.custom-offcanvas-title:hover {
  color: #ff0000; /* تغيير اللون عند التمرير */
  filter: brightness(1.5); /* زيادة السطوع عند التمرير */
}

/* Toggle Button */
.custom-toggler {
  border: 1px solid #ff6347; /* استخدام اللون الأحمر الفاتح */
  padding: 8px;
  border-radius: 50%; /* جعل الزر دائري */
}

.custom-toggler:hover {
  background:black; /* تغيير اللون الخلفي عند التمرير */
  transition: 0.3s ease-in-out;
  filter: brightness(1.2); /* زيادة السطوع عند التمرير */
  transform: scale(1.1); /* تكبير الزر عند التمرير */
}

/* تحسين تجربة المستخدم (UX) وواجهة المستخدم (UI) */
body {
  font-family: 'Arial', sans-serif;
  background: #f4f4f4; /* لون خلفية محايد */
  color: #333; /* لون النص */
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

button, .btn-primary {
  background-color: #ff6347;
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 5px;
  transition: all 0.3s ease;
}

button:hover, .btn-primary:hover {
  background-color: #e53e36; /* تغيير اللون عند التمرير */
  transform: scale(1.05); /* تكبير الزر عند التمرير */
  filter: brightness(1.2); /* زيادة السطوع عند التمرير */
}





    /* Hero Section */
    .hero-section {
      background: url('path-to-image.jpg') no-repeat center center;
      background-size: cover;
      width: 100%;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      text-align: center;
      position: relative;
    }

    .hero-content {
      z-index: 2;
    }

    .btn-primary {
      background-color: #ff5722;
      color: white;
      padding: 0.5rem 1rem;
      text-decoration: none;
      border-radius: 4px;
      transition: background-color 0.3s;
    }

    .btn-primary:hover {
      background-color: #e64a19;
    }

    /* Car Section */
    .car-section {
      padding: 2rem;
    }

    .car-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 1rem;
    }

    /* About Us Section */
    .about-us-section {
      display: flex;
      align-items: center;
    
      
      padding: 3rem;
      background-color:wite; /* لون أزرق فاتح */
    }

    .about-us-car {
      width: 30%;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      margin-right: 2rem;
      transition: transform 0.5s;
      animation: slide-in 1s ease-in-out;
    }

    @keyframes slide-in {
      from {
        transform: translateX(-100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    .about-us-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      perspective: 1000px;
      transform-style: preserve-3d;
      transition: transform 0.5s;
    }

    .about-us-content:hover {
      transform: rotateY(10deg);
    }

    .about-us-text {
      width: 65%;
      font-size: 1.2rem;
      background: linear-gradient(90deg, red, brown, rgb(67, 59, 40));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: color-change 5s linear infinite;
    }

    @keyframes color-change {
      0% { background-position: 0%; }
      100% { background-position: 100%; }
    }

    .about-us-title {
      font-size: 2.5rem;
      color: #333;
      text-align: left;
      margin-bottom: 1rem;
      font-weight: bold;
    }

    .about-us-title:hover {
      color: #d45d00;
      transition: color 0.3s ease;
    }
/* Media Query for iPhone SE and smaller screens */
@media screen and (max-width: 375px) {
  .feature-grid {
    display: flex;
    flex-direction: column; /* تغيير توجيه العناصر إلى الأسطر */
    flex-wrap: wrap; /* تمكين الكسر إلى الأسطر */
    gap: 1rem; /* إضافة فجوة بين العناصر */
  }

  .feature-icon {
    flex: 1 1 calc(33.333% - 1rem); /* توزيع متساوي للعناصر في الأسطر */
    text-align: center; /* محاذاة النصوص */
  }

  .feature-icon i {
    font-size: 2rem; /* تصغير حجم الأيقونات */
  }

  .feature-icon h4 {
    font-size: 1.2rem; /* تصغير حجم العناوين */
  }

  .feature-icon p {
    font-size: 0.9rem; /* تصغير حجم النصوص */
  }

}


    .about-us-title::before {
      content: 'معلومات عنا';
      position: absolute;
      left: 0;
      top: 0;
      color: rgba(0, 0, 0, 0.5);
      filter: blur(2px);
      transform: translate(5px, 5px);
      z-index: -1;
    }
    /* About Us Section Media Query for iPhone SE */
@media screen and (max-width: 375px) {
  .about-us-section {
    padding: 2rem; /* تقليل المسافة padding للشاشات الأصغر */
  }

  .about-us-car {
    width: 100%; /* جعل العرض الكامل للشعار في الأجهزة الصغيرة */
    margin-right: 0; /* حذف المسافة اليمنى */
    transition: transform 0.3s; /* تحسين سرعة الانتقال */
  }

  .about-us-content {
    flex-direction: column; /* جعل عناصر الصفحة تتجه إلى الأعلى للأسفل في الأجهزة الصغيرة */
    justify-content: center;
    text-align: center; /* محاذاة النصوص في المركز */
  }

  .about-us-text {
    width: 100%; /* جعل النص بالكامل في الأجهزة الصغيرة */
    font-size: 1rem; /* تقليل حجم النص في الأجهزة الصغيرة */
  }

  .about-us-title {
    font-size: 1.5rem; /* تقليل حجم العنوان ليكون مناسباً للشاشات الصغيرة */
  }
}

    /* FAQ Section */
.faq {
    background-color: #fff;
    padding: 50px 20px;
    text-align: center;
}

.faq h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #2c3e50;
}

.faq-container {
    max-width: 800px;
    margin: auto;
    text-align: left;
}

.faq-item {
    margin-bottom: 15px;
    background: #f9f9f9;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.3s ease, background 0.3s ease;
}

.faq-item:hover {
    background: #f39c12;
    color: #fff;
    transform: translateY(-5px);
}

.faq-question {
    font-weight: bold;
    font-size: 1.1rem;
    margin-bottom: 5px;
}

.faq-answer {
    display: none;
    font-size: 0.95rem;
    line-height: 1.5;
    color: #555;
}
.stats {
    font-family: Arial, sans-serif;
    margin: 20px auto;
    max-width: 800px;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.stats h2 {
    color: #333;
    font-size: 1.8em;
    margin-bottom: 20px;
    position: relative;
}

.stats h2::after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background-color: #ed500d;
    margin: 10px auto;
    border-radius: 5px;
}

.stats-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
}

.stat-item {
    background-color: #fff;
    padding: 15px 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
}

.stat-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.stat-number {
    font-size: 2.5em;
    font-weight: bold;
    color:  #ed500d;
    margin-bottom: 10px;
}

.stat-description {
    font-size: 1em;
    color: #555;
}
.page-title {
  display: flex;
  align-items: center;
  gap: 10px; /* Adjust spacing between the image and text */
}

.title-logo {
  width: 30px;
  height: auto;
}
@media screen and (max-width: 320px) {
  body {
    font-size: 14px; /* Adjust font size for smaller screens */
  }

  .hero-section {
    height: 50vh; /* Reduce hero section height */
  }

  .car-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Adjust car grid for smaller screens */
    gap: 0.5rem; /* Reduce gap between car items */
  }

  .about-us-car {
    width: 100%; /* Full width for about us car section */
    margin-right: 0;
  }

  .about-us-content {
    flex-direction: column; /* Stack elements vertically for smaller screens */
  }

  .about-us-text {
    font-size: 1rem; /* Reduce font size for about-us text */
  }

  .stats-container {
    grid-template-columns: 1fr; /* Stack grid items in a single column */
  }

  .stat-item {
    padding: 10px; /* Reduce padding for stats container */
  }

  .faq-container {
    padding: 10px; /* Reduce padding for FAQ section */
  }

  .faq-question {
    font-size: 0.9rem; /* Smaller font size for FAQ questions */
  }
}

    </style>