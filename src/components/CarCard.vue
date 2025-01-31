<template>
  <div class="car-card">
    <img :src="car.src" :alt="car.name" class="car-image" @mouseover="isHovered = true" @mouseleave="isHovered = false" />
    <div class="car-details" :class="{ 'hovered': isHovered }">
      <h3>{{ car.name }}</h3>
      <p>Price: {{ formatPrice(car.price) }}</p>
      <button @click="viewDetails(car.name)">View Details</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    car: Object
  },
  data() {
    return {
      isHovered: false
    };
  },
  methods: {
    formatPrice(price) {
      return `${price} MAD`;
    },
    viewDetails(carName) {
      const details = {
  'Jeep Wrangler': {
    year: 2021,
    color: 'Black',
    transmission: 'Manual',
    description: 'The Jeep Wrangler is a powerful 4x4 vehicle, perfect for off-road adventures.',
  },
  'Hyundai Sonata': {
    year: 2019,
    color: 'Blue',
    transmission: 'Automatic',
    description: 'The Hyundai Sonata is known for its comfortable interior and fuel efficiency.',
  },
  'Fiat X 500': {
    year: 2020,
    color: 'White',
    transmission: 'Manual',
    description: 'The Fiat 500 is a compact and stylish car, ideal for city driving.',
  },
  
  'Dacia Sandero': {
    year: 2020,
    color: 'Red',
    transmission: 'Automatic',
    description: 'The Dacia Logan provides a blend of style and comfort for city driving.',
  },
  'Renault Clio': {
    year: 2020,
    color: 'Red',
    transmission: 'Automatic',
    description: 'The Renault Clio provides a blend of style and comfort for city driving.',
  },

  'Peugeot 208': {
    year: 2019,
    color: 'Red',
    transmission: 'Automatic',
    description: 'The Peugeot 208 blends stylish design with excellent handling and fuel efficiency.',
  },
  'Ford Fiesta': {
    year: 2019,
    color: 'White',
    transmission: 'Manual',
    description: 'The Ford Fiesta Octavia offers a balance of practicality and comfort.',
  },
  'Citroen C3': {
    year: 2020,
    color: 'Black',
    transmission: 'Automatic',
    description: ' the Citroen provides a smooth and luxurious driving experience.',
  },
  'Fiat 500': {
    year: 2021,
    color: 'Silver',
    transmission: 'Automatic',
    description: 'The Citroen C3 combines efficiency and reliability.',
  },

  'Dacia Stepway': {
    year: 2020,
    color: 'Blue',
    transmission: 'Automatic',
    description: 'The Citroen 2023 offers a comfortable and refined driving experience.',
  }
};

      const carDetails = details[carName] || { description: 'Details not available.' };
      alert(`Details for ${carName}\nYear: ${carDetails.year || 'N/A'}\nColor: ${carDetails.color || 'N/A'}\nTransmission: ${carDetails.transmission || 'N/A'}\nDescription: ${carDetails.description}`);
    }
  }
};
</script>

<style scoped>
/* Styling for CarCard.vue */
.car-card {
  width: 90%; /* عرض الكارت نسبة للشاشة */
  height: auto; /* جعل الارتفاع يتكيف مع المحتوى */
  margin: 10px 0 10px 9px; /* إضافة margin-left مع تعديل باقي الجوانب */
  display: flex;
  flex-direction: column; /* ترتيب المحتويات داخل الكارت عموديًا */
  justify-content: center; /* توسيط المحتويات عموديًا */
  align-items: center; /* توسيط المحتويات أفقيًا */
  padding: 10px;
  border: 1px solid #ddd; /* إطار للكارت */
}

.container {
  display: flex;
  flex-wrap: wrap; /* يتيح للكروت النزول إلى سطر جديد عند صغر الشاشة */
  justify-content: center; /* وضع الكروت في الوسط */
}


.car-image {
  width: 100%; /* يجعل الصورة تأخذ العرض الكامل للبطاقة */
  height: 150px; /* ارتفاع ثابت للصورة */
  object-fit: cover; /* يجعل الصورة تغطي المساحة المحددة مع الحفاظ على النسبة */
  transition: transform 0.3s; /* تأثير التحويل */
}

.car-image:hover {
  transform: scale(1.1); /* تكبير الصورة عند تمرير الماوس */
}

.car-details {
  margin-top: 10px;
}

button {
  background-color: #ff5722;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}
button:hover {
  background-color: #e64a19;
}

/* Media query for iPhone SE or smaller screens */
@media screen and (max-width: 375px) {
  .car-container { /* الحاوية التي تحتوي على الكروت */
    display: flex;
    flex-direction: column; /* ترتيب الكروت عموديًا */
    align-items: center; /* توسيط الكروت أفقيًا */
    justify-content: center; /* توسيط الكروت عموديًا */
    padding: 10px; /* إضافة تباعد داخلي */
  }

  .car-card {
    width: 90%; /* عرض الكارت نسبة للشاشة */
    height: auto; /* جعل الارتفاع يتكيف مع المحتوى */
    margin: 10px 0 10px 20px; /* إضافة margin-left */
    flex-direction: column; /* ترتيب المحتويات داخل الكارت عموديًا */
    align-items: flex-start; /* محاذاة المحتويات إلى اليسار */
  }

  .car-image {
    width: 100%; /* عرض الصورة بالكامل */
    height: auto; /* ارتفاع الصورة يتكيف مع العرض */
  }

  .car-details {
    margin-top: 5px; /* تقليل المسافة بين الصورة والنص */
    text-align: left; /* جعل النص على اليسار */
    margin-left: 10px; /* إضافة مسافة يسار للنص */
  }

  button {
    padding: 8px 15px; /* تكبير حجم الأزرار */
    font-size: 0.9rem; /* تصغير النصوص في الأزرار */
    margin-left: 10px; /* إضافة مسافة يسار للأزرار */
  }
}




</style>
