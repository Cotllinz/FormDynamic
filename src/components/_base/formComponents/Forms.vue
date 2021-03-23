<template>
  <div class="dynamicForm mt-3">
    <main>
      <b-container>
        <b-row>
          <b-col cols="12">
            <b-card class="dynamicCard mb-5">
              <section>
                <div class="text-center">
                  <h2>Simple form Dynamic.</h2>
                  <p v-if="this.case === 0" class="mt-3" for="labelAdd">
                    Press Button Add Forms for adding more Forms
                  </p>
                  <button
                    v-if="this.case === 0"
                    @click="formAdding"
                    class="addForms py-2 px-5 mr-2"
                  >
                    Add Forms
                  </button>
                  <button @click="setCase" class="checking py-2 px-5">
                    {{ this.case === 1 ? 'Back to Add Form' : 'Checking' }}
                  </button>
                  <hr />
                </div>
                <!-- Form Input -->
                <div v-if="this.case === 0">
                  <b-card
                    data-aos="fade-up"
                    class="mb-3"
                    v-for="(items, index) in form"
                    :key="index"
                  >
                    <h2 style="font-size: 23px">Form {{ index + 1 }}</h2>
                    <hr />
                    <b-form>
                      <b-form-group
                        :id="`inputName${index + 1}`"
                        label="Name :"
                        label-for="input-1"
                      >
                        <b-form-input
                          :id="`inputName${index + 1}`"
                          autocomplete="off"
                          v-model="items.name"
                          type="text"
                          placeholder="Enter your name"
                        ></b-form-input>
                      </b-form-group>
                      <b-form-group
                        :id="`inputAddress${index + 1}`"
                        label="Address :"
                        label-for="input-1"
                      >
                        <b-form-textarea
                          v-model="items.alamat"
                          :id="`inputAddress${index + 1}`"
                          placeholder="Enter your address..."
                          rows="5"
                        ></b-form-textarea>
                      </b-form-group>
                    </b-form>
                  </b-card>
                  <button
                    @click="saveForm"
                    type="button"
                    class="btnSubmit mt-3 py-2 px-4"
                  >
                    Save
                  </button>
                </div>
                <!-- ===================================== -->
                <div v-if="this.case === 1">
                  <b-table
                    :bordered="true"
                    :foot-clone="true"
                    class="tables"
                    striped
                    hover
                    :items="getResultForm"
                    :fields="fields"
                  ></b-table>
                </div>
              </section>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </main>
  </div>
</template>

<script>
import Alert from '../../../mixins/alert'
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'DynamicForm',
  mixins: [Alert],
  data() {
    return {
      case: 0,
      fields: [
        {
          key: 'name',
          sortable: true
        },
        {
          key: 'alamat',
          sortable: true
        }
      ],
      form: [
        {
          name: '',
          alamat: ''
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['getResultForm'])
  },
  methods: {
    ...mapMutations(['setResultForm']),
    formAdding() {
      this.form.push({
        name: '',
        alamat: ''
      })
      this.AlertAddForm(this.form.length)
    },
    setCase() {
      if (this.case === 1) {
        this.case = 0
      } else {
        this.case = 1
      }
    },
    saveForm() {
      let nullData = false
      setTimeout(() => {
        for (let i = 0; i < this.form.length; i++) {
          if (this.form[i].name === '' || this.form[i].alamat === '') {
            nullData = true
          }
        }
      }, 100)
      setTimeout(() => {
        if (!nullData) {
          this.AlertSuccess()
          for (const i in this.form) {
            this.setResultForm(this.form[i])
          }
          this.form = [
            {
              name: '',
              alamat: ''
            }
          ]
        } else {
          this.AlertEmptyFill()
        }
      }, 200)
    }
  }
}
</script>
<style scoped>
.dynamicCard {
  border-radius: 8px;
  font-family: 'Poppins', sans-serif;
  box-shadow: 5px 6px 10px #ff9de2;
}
.dynamicCard h2 {
  color: #8c82fc;
  font-size: 30px;
  font-weight: 700;
}
textarea {
  resize: none;
}
.btnSubmit {
  display: block;
  margin: 0 auto;
  border: none;
  font-size: 20px;
  font-weight: 700;
  color: #ff9de2;
  background: none;
  border: 2px solid #ff9de2;
  border-radius: 7px;
}
.btnSubmit:hover {
  transition: 0.5s;
  color: #fd61ce;
  border: 2px solid #fd61ce;
}
.dynamicCard p {
  margin-bottom: 5px;
  font-size: 13px;
}
.addForms {
  border: none;
  background: #ff9de2;
  color: #fff;
  font-size: 19px;
  font-weight: 700;
  border-radius: 7px;
}
.addForms:hover {
  background: #ff74d5;
  transition: 0.5s;
}
.checking {
  border: none;
  background: #8c82fc;
  color: #fff;
  font-size: 19px;
  font-weight: 700;
  border-radius: 7px;
}
.checking:hover {
  background: #786cff;
  transition: 0.5s;
}
</style>
