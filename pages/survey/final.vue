<!-- maxed out survey layout usage -->

<template>
  <div>
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
            <ButtonWrapper @buttonclicked="() => handleButtonClick()" v-if="currentViewName == 'welcome'">
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
        <DefaultRightBarContent />
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
            :totalvalue="7 * 24 - weeklySleepHours">
        </Chart>

        <div class="draggable" v-if="currentViewName == 'end-yes' ||currentViewName=='end-no'">
          <Slider
            :max="100"
            v-model="endslidervalue"
            orientation="vertical"
            :pt="{
              range: {
                style: {
                  backgroundColor: 'red'
                }
              },
              handle: {
                style: {
                  backgroundColor: 'white',
                  borderRadius: 0,
                  borderWidth: 1,
                  rotate: '45deg',
                  borderColor: 'white',
                  scale: 2
                 }
              }
            }"
          />
        </div>
      </template>

      <template #rightbottombar>
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
              <p class="resultbar-value">{{ timesUntilRetirement.topLeftHours }}h für Arbeit</p>
              <p class="resultbar-value">{{timesUntilRetirement.bottomLeftHours}}h für Andere</p>
              <p class="resultbar-value">{{timesUntilRetirement.topRightHours}}h für Anderes</p>
              <p class="resultbar-value">{{timesUntilRetirement.bottomRightHours}}h für Dich</p>
            </div>
            <button class="result-button">Ergebnis Download</button>
          </div>

        </div>

      </template>
    </NuxtLayout>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false
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

const handleButtonClick = () => {
  if(currentViewName.value == 'welcome') {
    currentViewName.value = 'personal'
  }
}

import EndYesButtons from "/components/content/survey-end/buttons-yes.vue";
import EndNoButtons from "/components/content/survey-end/buttons-no.vue";

import Slider from "primevue/slider";
import { useEndSliderValue } from "/composables/state.js";

const endslidervalue = useEndSliderValue()

function calculateHoursAndWeeks(fromDate) {
  console.log("got date: ", fromDate)
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

    // anteil der gesamten zeit * (1 - schlaf - zeit für dich)
    const factorForOthers = 1 - ((24 * 7 - (sleepHours.value + timeForSelf.value)) / (24 * 7 * 100))
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
    console.log("result: ", result)
    const factorForMe = ((24 * 7 - (sleepHours.value + timeForSelf.value)) / (24 * 7 * 100))
    console.log("factorForMe", factorForMe)
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

  // Get the current date and time
  const currentDate = new Date();

  // Calculate the time difference in milliseconds
  const timeDifference = new Date(currentDate - birthdate);

  // Calculate the age in years
  const age = timeDifference.getUTCFullYear() - 1970;

  // Check if the person is already 65 or older
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

  const timesUntilRetirement = computed(() => {
    if(birthdate) {
      const total = calculateHoursAndWeeksUntilRetirement(birthdate.value)

      const factorTopLeft = visualizationPercentLeftTop().value / 100
      const factorBottomLeft = visualizationPercentLeftBottom().value / 100
      const factorTopRight = visualizationPercentRightTop().value / 100
      const factorBottomRight = visualizationPercentRightBottom().value / 100

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
})

const occupation = useOccupation()
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
    font-size: 1.85rem;
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
    font-size: .75rem;
    line-height: 135%;
  }
}

.resultbar-content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 1rem;
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

}
</style>