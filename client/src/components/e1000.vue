<template>
  <q-page class="bg-page row justify-center q-py-md">
    <div class="col-6">
      <q-card class="bg-card" align="center">
        <q-card-section class="text-txtNormal justify-center">ClusterStor E1000 Configurator
        </q-card-section>

        <q-form @submit="handleAddFileSystem">

          <!-- File System  -->

          <q-expansion-item icon="storage" label="File System" default-opened header-class="bg-drop">
            <q-card-section class="bg-section row justify-center">
              <q-input v-model.number="config.fsIndex" value=1 type="number" class="bg-card" outlined label="File System Index" />
            </q-card-section>
            <q-card-section class="bg-section row justify-center">
              <div class="col-6">
                <q-select v-if="element.smuNIC" v-model="config.smuNIC" outlined :options="JSON.parse(element.smuNIC.options)" :label="element.smuNIC.label" emit-value map-options class="bg-card" popup-content-class="bg-drop" options-selected-class="text-deep-orange">
                  <template v-slot:prepend>
                    <q-icon :name="element.smuNIC.icon" />
                  </template>
                </q-select>
              </div>

            </q-card-section>
          </q-expansion-item>

          <!-- MDU  -->

          <q-expansion-item icon="storage" label="MDU" default-opened header-class="bg-drop">
            <q-card-section class="bg-section row justify-center">
              <q-input v-model.number="config.mduCount" value=1 type="number" class="bg-card" outlined style="max-width: 200px" label="MDU Server Qty" />
            </q-card-section>
            <q-card-section class="bg-section row justify-center">
              <div class="col">
                <q-select v-if="element.mduMemory" v-model="config.mduMemory" outlined :options="JSON.parse(element.mduMemory.options)" :label="element.mduMemory.label" emit-value map-options class="bg-card" popup-content-class="bg-drop" options-selected-class="text-deep-orange">
                  <template v-slot:prepend>
                    <q-icon :name="element.mduMemory.icon" />
                  </template>
                </q-select>
              </div>
              <div class="col">
                <q-select v-if="element.mduNIC" v-model="config.mduNIC" outlined :options="JSON.parse(element.mduNIC.options)" :label="element.mduNIC.label" emit-value map-options class="bg-card" popup-content-class="bg-drop" options-selected-class="text-deep-orange">
                  <template v-slot:prepend>
                    <q-icon :name="element.mduNIC.icon" />
                  </template>
                </q-select>
              </div>
            </q-card-section>
            <q-card-section class="bg-section row justify-center">
              <div class="col">
                <q-select v-if="element.mduSSD" v-model="config.mduSSD" outlined :options="JSON.parse(element.mduSSD.options)" :label="element.mduSSD.label" emit-value map-options class="bg-card" popup-content-class="bg-drop" options-selected-class="text-deep-orange">
                  <template v-slot:prepend>
                    <q-icon :name="element.mduSSD.icon" />
                  </template>
                </q-select>
              </div>
              <div class="col">
                <div v-if="config.mduSSD == '1'">
                  <q-select v-if="element.mduSize1DWPD" v-model="config.mduSize1DWPD" outlined :options="JSON.parse(element.mduSize1DWPD.options)" :label="element.mduSize1DWPD.label" emit-value map-options class="bg-card" popup-content-class="bg-drop" options-selected-class="text-deep-orange">
                    <template v-slot:prepend>
                      <q-icon :name="element.mduSize1DWPD.icon" />
                    </template>
                  </q-select>
                </div>
                <div v-else-if="config.mduSSD == '3'">
                  <q-select v-if="element.mduSize3DWPD" v-model="config.mduSize3DWPD" outlined :options="JSON.parse(element.mduSize3DWPD.options)" :label="element.mduSize3DWPD.label" emit-value map-options class="bg-card" popup-content-class="bg-drop" options-selected-class="text-deep-orange">
                    <template v-slot:prepend>
                      <q-icon :name="element.mduSize3DWPD.icon" />
                    </template>
                  </q-select>
                </div>
              </div>
            </q-card-section>
          </q-expansion-item>

          <!-- SSU-F  -->

          <q-expansion-item icon="storage" label="Flash SSU" default-opened header-class="bg-drop">
            <q-card-section class="bg-section row justify-center">
              <q-input v-model.number="config.ssufCount" value=1 type="number" class="bg-card" outlined style="max-width: 200px" label="Flash Server Qty" />
            </q-card-section>
            <q-card-section class="bg-section row justify-center">
              <div class="col-6">
                <q-select v-if="element.ssufNIC" v-model="config.ssufNIC" outlined :options="JSON.parse(element.ssufNIC.options)" :label="element.ssufNIC.label" emit-value map-options class="bg-card" popup-content-class="bg-drop" options-selected-class="text-deep-orange">
                  <template v-slot:prepend>
                    <q-icon :name="element.ssufNIC.icon" />
                  </template>
                </q-select>
              </div>
            </q-card-section>
            <q-card-section class="bg-section row justify-center">
              <div class="col">
                <q-select v-if="element.ssufSSD" v-model="config.ssufSSD" outlined :options="JSON.parse(element.ssufSSD.options)" :label="element.ssufSSD.label" emit-value map-options class="bg-card" popup-content-class="bg-drop" options-selected-class="text-deep-orange">
                  <template v-slot:prepend>
                    <q-icon :name="element.ssufSSD.icon" />
                  </template>
                </q-select>
              </div>
              <div class="col">
                <div v-if="config.ssufSSD == '1'">
                  <q-select v-if="element.ssufSize1DWPD" v-model="config.ssufSize1DWPD" outlined :options="JSON.parse(element.ssufSize1DWPD.options)" :label="element.ssufSize1DWPD.label" emit-value map-options class="bg-card" popup-content-class="bg-drop" options-selected-class="text-deep-orange">
                    <template v-slot:prepend>
                      <q-icon :name="element.ssufSize1DWPD.icon" />
                    </template>
                  </q-select>
                </div>
                <div v-else-if="config.ssufSSD == '3'">
                  <q-select v-if="element.ssufSize3DWPD" v-model="config.ssufSize3DWPD" outlined :options="JSON.parse(element.ssufSize3DWPD.options)" :label="element.ssufSize3DWPD.label" emit-value map-options class="bg-card" popup-content-class="bg-drop" options-selected-class="text-deep-orange">
                    <template v-slot:prepend>
                      <q-icon :name="element.ssufSize3DWPD.icon" />
                    </template>
                  </q-select>
                </div>
              </div>
            </q-card-section>
          </q-expansion-item>

          <!-- SSU-D  -->

          <q-expansion-item icon="storage" label="Disk SSU" default-opened header-class="bg-drop">
            <q-card-section class="bg-section row justify-center">
              <q-input v-model.number="config.mduCount" value=1 type="number" class="bg-card" outlined style="max-width: 200px" label="SSU-D Qty" />
            </q-card-section>
            <q-card-section class="bg-section row justify-center">
              <div class="col">
                <q-select v-if="element.ssuMemory" v-model="config.ssuMemory" outlined :options="JSON.parse(element.ssuMemory.options)" :label="element.ssuMemory.label" emit-value map-options class="bg-card" popup-content-class="bg-drop" options-selected-class="text-deep-orange">
                  <template v-slot:prepend>
                    <q-icon :name="element.ssuMemory.icon" />
                  </template>
                </q-select>
              </div>
              <div class="col">
                <q-select v-if="element.ssuEnclosures" v-model="config.ssuEnclosures" outlined :options="JSON.parse(element.ssuEnclosures.options)" :label="element.ssuEnclosures.label" emit-value map-options class="bg-card" popup-content-class="bg-drop" options-selected-class="text-deep-orange">
                  <template v-slot:prepend>
                    <q-icon :name="element.ssuEnclosures.icon" />
                  </template>
                </q-select>
              </div>
            </q-card-section>
            <q-card-section class="bg-section row justify-center">
              <div class="col">
                <q-select v-if="element.ssudNIC" v-model="config.ssudNIC" outlined :options="JSON.parse(element.ssudNIC.options)" :label="element.ssudNIC.label" emit-value map-options class="bg-card" popup-content-class="bg-drop" options-selected-class="text-deep-orange">
                  <template v-slot:prepend>
                    <q-icon :name="element.ssudNIC.icon" />
                  </template>
                </q-select>
              </div>
              <div class="col">
                <q-select v-if="element.ssudSize" v-model="config.ssudSize" outlined :options="JSON.parse(element.ssudSize.options)" :label="element.ssudSize.label" emit-value map-options class="bg-card" popup-content-class="bg-drop" options-selected-class="text-deep-orange">
                  <template v-slot:prepend>
                    <q-icon :name="element.ssudSize.icon" />
                  </template>
                </q-select>
              </div>
            </q-card-section>
          </q-expansion-item>

          <div class="row q-pa-sm justify-center">
            <q-btn type="submit">submit
            </q-btn>
          </div>

        </q-form>

      </q-card>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'e1000',

  data() {
    return {
      config: {}
    }
  },

  mounted() {
    this.getElements()
  },

  computed: {
    ...mapGetters(['element', 'loading'])
  },

  methods: {
    getElements() {
      this.$store.dispatch('getElements', {
        product: 'e1000'
      })
    },
    handleAddFileSystem() {
      console.log('select ' + JSON.stringify(this.config))
    }
  }
}
</script>
