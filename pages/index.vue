<!-- maxed out survey layout usage -->

<template>
  <div id="">
    <NuxtLayout name="survey"> <!-- for some reason, setting the layout with definepagemeta doesnt work with multiple named slots -->
      <template #centersquare>
        <Transition mode="out-in">
            <WelcomeCenterSquare v-if="currentViewName === 'welcome'" key="0"/>
            <PersonalCenterSquare v-else-if="currentViewName === 'personal'" key="1"/>
            <SleepCenterSquare v-else-if="currentViewName === 'sleep'" key="2"/>
            <SlidersCenterSquare v-else-if="currentViewName === 'sliders'" key="3"/>
            <ConfirmCenterSquare v-else-if="currentViewName === 'confirm' || currentViewName === 'end-yes' || currentViewName === 'end-no'" key="4" />
            <div v-else>nothing to show</div>
        </Transition>
      </template>

      <template #buttons>
            <ButtonWrapper @buttonclicked="() => handleWelcomeButtonClick()" v-if="currentViewName == 'welcome'">
              <WelcomeButtons />
            </ButtonWrapper>

            <PersonalButtons v-else-if="currentViewName == 'personal'"/>
            <SleepButtons v-else-if="currentViewName == 'sleep'" />
            <SlidersButtons v-else-if="currentViewName == 'sliders'" />
            <ConfirmButtons v-else-if="currentViewName == 'confirm'" />
            <EndYesButtons v-else-if="currentViewName == 'end-yes'" />
            <EndNoButtons v-else-if="currentViewName == 'end-no'" />
      </template>

      <template #contact>
        <DefaultContact />
      </template>

      <template #right-bar>
        <Transition>
          <DefaultRightBarContent v-if="currentViewName !== 'welcome'" :identificationNumber="identificationnumberValue"/>
        </Transition>
      </template>

      <template #right-square>
        <DefaultRightSquareContent v-if="currentViewName == 'end'"/>
      </template>

      <template #layoutright>
          <Chart
              :topleft="priochartDataTopLeft"
              :topright="priochartDataBottomLeft"
              :bottomleft="priochartDataTopRight"
              :bottomright="priochartDataBottomRight"
              :totalvalue="7 * 24 - weeklySleepHours"
              :is-for-print="false">
          </Chart>

          <div class="draggable" v-if="currentViewName == 'end-yes' ||currentViewName=='end-no'">
          <Slider
            :max="100"
            v-model="endslidervalue"
            orientation="vertical"
            :pt="{
              range: {
                style: {
                  backgroundColor: 'transparent'
                }
              },
              handle: {
                style: {
                  backgroundColor: 'transparent',
                  borderRadius: 0,
                  borderWidth: 1,
                  borderColor: 'transparent',
                  transform: 'scale(30, 5) rotate(45deg)'
                 }
              }
            }"
          />
        </div>
      </template>

      <template #rightbottombar>
        <div :class="`rightbottombar`" v-if="currentViewName == 'end-yes' ||currentViewName=='end-no'">
          <h2>Ergebnis</h2>
          <div class="resultbar-content">
            <div class="d-flex justify-content-between flex-column">
              <div>
                <h3 class="resultbar-headline">Aktive Lebenszeit verplant</h3>
                <p class="resultbar-value">{{ plannedTimeForOthers.hours }} Stunden / {{ plannedTimeForOthers.weeks }} Wochen</p>
              </div>
              <div>
                <h3 class="resultbar-headline">Aktive Lebenszeit für dich</h3>
                <p class="resultbar-value">{{ plannedTimeForYourself.hours }} Stunden / {{plannedTimeForYourself.weeks}} Wochen</p>
              </div>
            </div>
            <div class="transparent">
              <h3 class="resultbar-headline">Restliche Zeit bis zur Pension</h3>
              <p class="resultbar-value">{{ resultTopLeftHours }}h für Arbeit</p>
              <p class="resultbar-value">{{ resultBottomLeftHours }}h für Andere</p>
              <p class="resultbar-value">{{resultTopRightHours}}h für Anderes</p>
              <p class="resultbar-value">{{resultBottomRightHours}}h für Dich</p>
            </div>
            <button class="result-button" @click="handleDownloadClick()">Ergebnis Download</button>
          </div>

        </div>

      </template>
    </NuxtLayout>

    <div class="printcontainer-wrapper" :class="currentViewName == 'end-yes' ? '': 'printcontainer--end-no'">
      <div class="printcontainer" id="element-to-print">
        <Chart
            :topleft="priochartDataTopLeft"
            :topright="priochartDataBottomLeft"
            :bottomleft="priochartDataTopRight"
            :bottomright="priochartDataBottomRight"
            :totalvalue="7 * 24 - weeklySleepHours">
        </Chart>
        <div class="rightbottombar" v-if="currentViewName == 'end-yes' ||currentViewName=='end-no'">
          <h2>Ergebnis</h2>
          <div class="resultbar-content">
            <div class="d-flex justify-content-between flex-column">
              <div>
                <h3 class="resultbar-headline">Aktive Lebenszeit verplant</h3>
                <p class="resultbar-value">{{ plannedTimeForOthers.hours }} Stunden / {{ plannedTimeForOthers.weeks }} Wochen</p>
              </div>
              <div>
                <h3 class="resultbar-headline">Aktive Lebenszeit für dich</h3>
                <p class="resultbar-value">{{ plannedTimeForYourself.hours }} Stunden / {{plannedTimeForYourself.weeks}} Wochen</p>
              </div>
            </div>
            <div class="transparent">
              <h3 class="resultbar-headline">Restliche Zeit bis zur Pension</h3>
              <p class="resultbar-value">{{ resultTopLeftHours }}h für Arbeit</p>
              <p class="resultbar-value">{{ resultBottomLeftHours }}h für Andere</p>
              <p class="resultbar-value">{{resultTopRightHours}}h für Anderes</p>
              <p class="resultbar-value">{{resultBottomRightHours}}h für Dich</p>
            </div>
            <p class="print-identificationnnumber">{{ identificationnumberValue }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false
})

useHead({
  title: 'PRIO - Wem gehörst du? - Kollektiv Schlaflos',
  meta: [
    {
      name: 'description',
      content: 'Realität ≠ Normalität. Wem gehörst du wirklich? Teil dein leben durch vier! Nimm jetzt an dem Datenexperiment teil!',
    },
    {
      name: 'keywords',
      content: 'Datenvisualisierung; Zeitverteilung; Zeitmanagement; Prioritätsblöcke; Priorität; Bedrängnis Lebensbereiche; Lebenszeit; Realität; Normalität; Lebensbereiche; Fremdbestimmung; Vier Blöcke; Leben; Schlaflos: Kollektiv Schlaflos; Arbeit; Ich; Andere; Anderes; Anspannung; Stress; FOMO;',
    },
  ]
})


import {
  usePriochartBottomLeft,
  usePriochartTopLeft,
  usePriochartTopRight,
  usePriochartBottomRight,
  useBirthdate,
  visualizationPercentLeftTop,
  visualizationPercentLeftBottom,
  visualizationPercentRightTop,
  visualizationPercentRightBottom
} from "/composables/state";
import { useCurrentViewName, usePersonalInfoSteps, useWeeklySleepHours } from "/composables/state"

const currentViewName = useCurrentViewName()
const weeklySleepHours = useWeeklySleepHours()

// state across all pages
const priochartDataTopLeft = usePriochartTopLeft()
const priochartDataBottomLeft = usePriochartBottomLeft()
const priochartDataTopRight = usePriochartTopRight()
const priochartDataBottomRight = usePriochartBottomRight()

// default components (= shared components)
import DefaultRightSquareContent from "/components/content/survey-welcome/right-square-content.vue";
import DefaultRightBarContent from "/components/content/survey-welcome/right-bar-content.vue";
import DefaultContact from "/components/content/survey-welcome/contact.vue";
import ButtonWrapper from "/components/button.vue";

// welcome
import WelcomeCenterSquare from "/components/content/survey-welcome/center-square.vue";
import WelcomeButtons from "/components/content/survey-welcome/buttons.vue";

// personal info
import PersonalCenterSquare from "/components/content/survey-personal-info/maxed-out/center-square.vue";
import PersonalButtons from "/components/content/survey-personal-info/maxed-out/buttons.vue";

// sleep
import SleepCenterSquare from "/components/content/survey-sleep/maxed-out/center-square.vue";
import SleepButtons from "/components/content/survey-sleep/maxed-out/buttons.vue";

// sliders
import Chart from "/components/prioChart.vue"
import SlidersCenterSquare from "/components/content/survey-slider/center-square.vue";
import SlidersButtons from "/components/content/survey-slider/buttons.vue";

// confirm
import ConfirmButtons from "/components/content/survey-confirm/buttons.vue";
import ConfirmCenterSquare from "/components/content/survey-confirm/center-square.vue";


const identificationnumberValue = ref(0);
const updatedValue = ref(0)
const { find } = useStrapi()

const handleWelcomeButtonClick = async () => {
  if(currentViewName.value == 'welcome') {
    currentViewName.value = 'personal'
    // read value of id number here and write to state
    await readFromDb()
    await increaseDbValue()
  }
}

async function readFromDb() {
  const {data} = await find('identification-number-counter')
  identificationnumberValue.value = data.attributes.identificationNumber 
  updatedValue.value = +identificationnumberValue.value + 1
  // console.log("Identification Number: " , identificationnumberValue.value)
  // console.log("Updated Number: ", updatedValue.value)

  // pad with zero if number is one digit long
  if(identificationnumberValue.value.length == 1) {
    identificationnumberValue.value = "0" + identificationnumberValue.value
  }
}

async function increaseDbValue() {
  // console.log("Updated Value: " , updatedValue.value)
  const increasedIdentificationNumber = await update('identification-number-counter', {
        "identificationNumber": updatedValue.value
  })
}

import EndYesButtons from "/components/content/survey-end/buttons-yes.vue";
import EndNoButtons from "/components/content/survey-end/buttons-no.vue";

import Slider from "primevue/slider";
import { useEndSliderValue, bottomBarRightBottomPercent, bottomBarRightTopPercent, bottomBarLeftBottomPercent, bottomBarLeftTopPercent } from "/composables/state.js";

const endslidervalue = useEndSliderValue()

function calculateHoursAndWeeks(fromDate) {
  // Check if fromDate is a valid Date object
  if (!(fromDate instanceof Date) || isNaN(fromDate)) {
    return "Invalid date";
  }

  // Get the current date and time
  const currentDate = new Date();

  // Calculate the time difference in milliseconds
  const timeDifference = currentDate - fromDate;

  // Calculate the hours and weeks
  const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
  const weeksDifference = Math.floor(hoursDifference / (24 * 7));

  return {
    hours: hoursDifference,
    weeks: weeksDifference
  };
}

 const birthdate = useBirthdate()
 const sleepHours = useWeeklySleepHours()
 const timeForSelf = usePriochartBottomRight()


const plannedTimeForOthers = computed(() => {
  if(birthdate) {
    const fromDate = new Date(birthdate.value)
    const result = calculateHoursAndWeeks(fromDate)

    const activePerWeek = 24 * 7 - sleepHours.value
    const activeTimeForMe = timeForSelf.value
    const factorForMe = activeTimeForMe / activePerWeek

    // anteil der gesamten zeit * (1 - schlaf - zeit für dich)
    const factorForOthers = 1 - factorForMe

    return {
      hours: Math.floor(result.hours * factorForOthers),
      weeks: Math.floor(result.weeks * factorForOthers)
    }
  }
})

const plannedTimeForYourself = computed(() => {
  if(birthdate) {
    const fromDate = new Date(birthdate.value)
    const result = calculateHoursAndWeeks(fromDate)

    const activePerWeek = 24 * 7 - sleepHours.value
    const activeTimeForMe = timeForSelf.value
    const factorForMe = activeTimeForMe / activePerWeek

    return {
      hours: Math.floor(result.hours * factorForMe),
      weeks: Math.floor(result.weeks * factorForMe)
    }
  }
})

function calculateHoursAndWeeksUntilRetirement(birthdate) {
  // Check if birthdate is a valid Date object
  if (!(birthdate instanceof Date) || isNaN(birthdate)) {
    return "Invalid date";
  }

  const currentDate = new Date();
  const timeDifference = new Date(currentDate - birthdate);
  const age = timeDifference.getUTCFullYear() - 1970;
  if (age >= 65) {
    return "You are already 65 or older!";
  }

  // Calculate the remaining time until 65 in milliseconds
  const remainingTime = new Date(birthdate.getFullYear() + 65, birthdate.getMonth(), birthdate.getDate()) - currentDate;

  // Calculate the remaining hours and weeks
  const remainingHours = Math.floor(remainingTime / (1000 * 60 * 60));
  const remainingWeeks = Math.floor(remainingHours / (24 * 7));

  return {
    hours: remainingHours,
    weeks: remainingWeeks
  };
}

const resultTopLeftHours = ref(0)
const resultBottomLeftHours = ref(0)
const resultTopRightHours = ref(0)
const resultBottomRightHours = ref(0)

watch(() => {
  if(currentViewName.value === 'end-yes' || currentViewName.value === 'end-no') {
      console.log(visualizationPercentLeftTop().value)
      calculateTimesToRetirement()
  }
})

  function calculateTimesToRetirement() {
    if(birthdate.value) {
      const total = calculateHoursAndWeeksUntilRetirement(birthdate.value)

      console.log("visualizationPercentLeftTop", visualizationPercentLeftTop().value)

      const factorTopLeft = bottomBarLeftTopPercent().value.toFixed() / 100
      const factorBottomLeft = bottomBarLeftBottomPercent().value.toFixed() / 100
      const factorTopRight = bottomBarRightTopPercent().value.toFixed() / 100
      const factorBottomRight = bottomBarRightBottomPercent().value.toFixed() / 100

      console.log({
        factorTopLeft,
        factorBottomLeft,
        factorTopRight,
        factorBottomRight
      })

      console.log({
        topLeftWeeks: total.weeks * factorTopLeft,
        bottomLeftWeeks: total.weeks * factorBottomLeft,
        topRightWeeks: total.weeks * factorTopRight,
        bottomRightWeeks: total.weeks * factorBottomRight,
        topLeftHours: (Math.floor(total.hours * factorTopLeft / 100) * 100).toLocaleString('de-DE'),
        bottomLeftHours: (Math.floor(total.hours * factorBottomLeft / 100) * 100).toLocaleString('de-DE'),
        topRightHours: (Math.floor(total.hours * factorTopRight / 100) * 100).toLocaleString('de-DE'),
        bottomRightHours: (Math.floor(total.hours * factorBottomRight / 100) * 100).toLocaleString('de-DE')
      })

      resultTopLeftHours.value = (Math.floor(total.hours * factorTopLeft / 100) * 100).toLocaleString('de-DE')
      resultBottomLeftHours.value = (Math.floor(total.hours * factorBottomLeft / 100) * 100).toLocaleString('de-DE')
      resultTopRightHours.value = (Math.floor(total.hours * factorTopRight / 100) * 100).toLocaleString('de-DE')
      resultBottomRightHours.value = (Math.floor(total.hours * factorBottomRight / 100) * 100).toLocaleString('de-DE')

      return {
        topLeftWeeks: total.weeks * factorTopLeft,
        bottomLeftWeeks: total.weeks * factorBottomLeft,
        topRightWeeks: total.weeks * factorTopRight,
        bottomRightWeeks: total.weeks * factorBottomRight,
        topLeftHours: (Math.floor(total.hours * factorTopLeft / 100) * 100).toLocaleString('de-DE'),
        bottomLeftHours: (Math.floor(total.hours * factorBottomLeft / 100) * 100).toLocaleString('de-DE'),
        topRightHours: (Math.floor(total.hours * factorTopRight / 100) * 100).toLocaleString('de-DE'),
        bottomRightHours: (Math.floor(total.hours * factorBottomRight / 100) * 100).toLocaleString('de-DE')
      }
    }
}

import html2pdf from 'html2pdf.js'

const handleDownloadClick = async () => {
  const element = document.getElementById('element-to-print');
  html2pdf(element)
}
const occupation = useOccupation();
const gender = useGender()
const nationality = useNationality()
const { create, update } = useStrapi()
const createRespondentRequestSent = ref(false)
const respondentId = ref(null)
const sliderAnswersRequestSent = ref(false)

watchEffect(async () => {
  if((currentViewName.value === 'end-yes' || currentViewName.value === 'end-no') && !createRespondentRequestSent.value) {
    // create user including weekly sleep hours
    try {
      const createdUser = await create('respondents', {
        birthdate: birthdate.value,
        gender: gender.value.value,
        occupancy: occupation.value,
        nationality: nationality.value.name,
        weeklySleepHours: weeklySleepHours.value
    });
    console.log('User created:', createdUser)
    createRespondentRequestSent.value = true
    respondentId.value = createdUser.data.id
    console.log("Respondent Id: " + respondentId.value)
    } catch (error) {
      console.error('Error creating user:', error);
    }

    if(createRespondentRequestSent.value && !sliderAnswersRequestSent.value) {
      // create database entries for slider answers, connect to user
      try {
          const sliderAnswersWorkHours = await create('slider-user-answers', {
            answer: priochartDataTopLeft.value
          })
          const sliderAnswerWorkHoursId = sliderAnswersWorkHours.data.id
          console.log(sliderAnswersWorkHours.data.id)
          const connectWorkHoursAnswer = await update('slider-user-answers', sliderAnswersWorkHours.data.id, {
            "respondent": {
              "connect": [
                {"id": respondentId.value}
              ]
            },
            "slider_question": {
              "connect": [
                {"id": 1}
              ]
           }
          })

          const sliderAnswerFamilyTime = await create('slider-user-answers', {
            respondent: respondentId.value,
            slider_question: "2",
            answer: priochartDataBottomLeft.value
          })
          const sliderAnswerFamilyTimeId = sliderAnswerFamilyTime.data.id
          const connectFamilyTimeAnswer = await update('slider-user-answers', sliderAnswerFamilyTimeId, {
            "respondent": {
              "connect": [
                {"id": respondentId.value}
              ]
            },
            "slider_question": {
              "connect": [
                {"id": 2}
              ]
           }
          })

          const sliderAnswerChores = await create('slider-user-answers', {
            respondent: respondentId.value,
            slider_question: "3",
            answer: priochartDataTopRight.value
          })
          const sliderAnswerChoresId = sliderAnswerChores.data.id
          const connectChoresAnswer = await update('slider-user-answers', sliderAnswerChoresId, {
            "respondent": {
              "connect": [
                {"id": respondentId.value}
              ]
            },
            "slider_question": {
              "connect": [
                {"id": 3}
              ]
           }
          })

          const sliderAnswerTimeForSelf = await create('slider-user-answers', {
            respondent: respondentId.value,
            slider_question: "4",
            answer: priochartDataBottomRight.value
          })
          const sliderAnswerTimeForSelfId = sliderAnswerTimeForSelf.data.id
          const connectTimeForSelfAnswer = await update('slider-user-answers', sliderAnswerTimeForSelfId, {
            "respondent": {
              "connect": [
                {"id": respondentId.value}
              ]
            },
            "slider_question": {
              "connect": [
                {"id": 4}
              ]
           }
          })

          sliderAnswersRequestSent.value = true
        }
      catch (error) {
        console.error('Error creating database entry for slider answers:', error);
      }

      if(createRespondentRequestSent.value && sliderAnswersRequestSent.value){
        // create database entries for survey result, connect to user
        try{
          const surveyResultPostRequest = await create('survey-results', {
            Work: priochartDataTopLeft.value,
            Various: priochartDataTopRight.value,
            Others: priochartDataBottomLeft.value,
            Self: priochartDataBottomRight.value
          })

          const connectWorkHoursAnswer = await update('survey-results', surveyResultPostRequest.data.id, {
            "respondent": {
              "connect": [
                {"id": respondentId.value}
              ]
            }
          })
        } catch (error) {
          console.error('Error creating database entry for survey result:', error);
        }
      }
    }
  }
})

</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity .35s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.p-slider-vertical {
  height: 20dvh;
  @media screen and (max-width: 950px) {
    height: 30dvh;
  }
}
</style>

<style scoped lang="scss">
.draggable {
  grid-column: 1 / span 1;
  grid-row: 2 / span 2;

  display: none;
  visibility: hidden;
  opacity: 0;
  height: 0;

  justify-self: center;
  align-self: end;
}

.rightbottombar {
  grid-row: 3 / span 1;
  grid-column: 1 / span 1;
}

.rightbottombar {
  padding: .75rem;

  h2 {
    font-family: Cirka;
    font-size: max(1.85rem, 1.5vw);
    padding-bottom: .5rem;
  }

  .transparent {
    h3, p {
      opacity: 0.35;
    }
  }

  h3, p {
    font-family: Helvetica;
    color: black;
    font-weight: 300;
    font-size: max(0.65rem, 0.725vw);

    line-height: 135%;
  }
}

.resultbar-content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: .65rem;
}

.d-flex {
  display: flex;
  row-gap: 1rem;
}

.flex-column {
  flex-direction: column;
}

.justify-content-between {
  justify-content: space-between;
}

.result-button {
  border: 1px solid black;
  font-family: Cirka;
  height: 100%;
  font-size: max(1.25rem, 1.25vw);
}
</style>

<style lang="scss">
.print-identificationnnumber {
  font-size: 5rem !important;
  font-family: 'Cirka' !important;
  line-height: 4rem !important;
  text-align: right;
  transform: translateY(24px) translateX(10px) !important;
  padding-bottom: 6.20mm;
  margin-top: -21.166666667mm;
}

.printcontainer-wrapper {
  position: absolute;
  top: -10000px;
  left: -100000px;
}

.printcontainer {
  padding-bottom: 28mm;

  .prio-chart__percentage {
    margin-bottom: 1.5rem !important;
  }

  .rightbottombar {
    padding: .75rem;
    h2 {
      font-family: Cirka;
      font-size: 1.85rem;
      padding-bottom: .5rem;
    }


    h3, p {
      font-family: Helvetica;
      color: black;
      font-weight: 300;
      font-size: .75rem;
      line-height: 135%;
    }
  }
}

.p-slider-handle:focus {
  box-shadow: none!important;
  border-color: transparent;
}

</style>