<template>
  <q-page class="bg-page row justify-center q-py-md">
    <q-list>
      <div v-for="(item, index) in items" :key='index'>
        <q-item>
          {{ item.selector }} {{ item.icon }}
        </q-item>
      </div>
    </q-list>

  </q-page>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Elements',

  data() {
    return {}
  },

  mounted() {
    this.getElements()
  },

  computed: {
    ...mapGetters(['element', 'items', 'loading'])
  },

  methods: {
    getElements() {
      this.$store.dispatch('getElements', {
        product: 'e1000'
      })
    }
  }
}
</script>