<template>
  <div class="q-pa-md row justify-center q-gutter-md">
    <q-card class="bg-signInForm text-horizNav">
      <q-card-section>
        <div class="text-h6">Create New Element
        </div>
      </q-card-section>
    </q-card>
    <q-separator />

    <div class="col-8">
      <q-form @submit="handleAddElement" v-model="isFormValid" ref="form">

        <!--  Product -->
        <q-select :options="products" v-model="product" label="Product" required />

        <!--  Selector -->
        <q-input color="blue" v-model="selector" label="Selector" type="text" :rules="selectRules" required />

        <!--  Options -->
        <q-input color="blue" v-model="options" label="Options" type="text" :rules="optionRules" required />

        <!--  Icon -->
        <q-input color="blue" v-model="icon" label="Icon" type="text" :rules="iconRules" required />

        <!--  Label -->
        <q-input color="blue" v-model="label" label="Selector" type="text" :rules="labelRules" required />

        <!--  Value -->
        <q-input color="blue" v-model="value" label="Value" type="text" :rules="valueRules" required />

        <q-btn no-caps class="bg-button" :disabled:="!isFormValid" type="submit">
          Submit
        </q-btn>
      </q-form>
    </div>

  </div>
</template>

<script>
export default {
  name: 'AddElement',

  data() {
    return {
      selectRules: [(selector) => !!selector || 'Selector is required', (selector) => selector.length < 20 || 'Selector must have less than 200 characters'],
      optionRules: [(options) => !!options || 'Options is required'],
      iconRules: [(icon) => !!icon || 'Icon is required'],
      labelRules: [(label) => !!label || 'Label is required'],
      valueRules: [(value) => !!value || 'Value is required'],
      isFormValid: true,
      products: ['e1000'],
      product: '',
      selector: '',
      options: '',
      icon: '',
      label: '',
      value: ''
    }
  },

  methods: {
    handleAddElement() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('addElement', {
          product: this.product,
          selector: this.selector,
          options: this.options,
          icon: this.icon,
          label: this.label,
          value: this.value
        })
      }
    }
  }
}
</script>