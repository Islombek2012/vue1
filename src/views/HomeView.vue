<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <CardComponent v-for="product, i in products" :key="i" :product="product"></CardComponent>
        
      </div>
    </div>
  </div>
</template>

<script>
import CardComponent from "@/components/CardComponent.vue";
import BaseBtn from '@/components/BaseBtn.vue';
export default {
  components: {
    CardComponent,
    BaseBtn
  },
  data() {
      return {
            products: [
                  {
                        id: 1,
                        img: "https://picsum.photos/300/300?random=1",
                        title:  'Product1',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatumtempora repellendus tempore, rem id quibusdam!'
                  },
                  {
                        id: 2,
                        img: "https://picsum.photos/300/300?random=2",
                        title:  'Product2',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatumtempora repellendus tempore, rem id quibusdam!'
                  },
                  {
                        id: 3,
                        img: "https://picsum.photos/300/300?random=3",
                        title:  'Product3',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatumtempora repellendus tempore, rem id quibusdam!'
                  },
                  {
                        id: 4,
                        img: "https://picsum.photos/300/300?random=4",
                        title:  'Product4',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatumtempora repellendus tempore, rem id quibusdam!'
                  },
                  {
                        id: 5,
                        img: "https://picsum.photos/300/300?random=5",
                        title:  'Product5',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatumtempora repellendus tempore, rem id quibusdam!'
                  },
                  {
                        id: 6,
                        img: "https://picsum.photos/300/300?random=6",
                        title:  'Product6',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatumtempora repellendus tempore, rem id quibusdam!'
                  },
            ]
      }
  },
  methods: {
      name() {
            
      }
  },
};
</script>

<style lang="scss" >
.home {
  .row {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
    margin: 50px 0;
    .col {
      border: 3px solid black;
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      padding: 10px;
      gap: 20px;
      border-radius: 10px;
      img {
        border-radius: 10px;
      }
    }
  }
}
</style>