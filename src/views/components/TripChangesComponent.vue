<style lang="scss" scoped src="@/styles/views/TripComponent.scss"></style>


<template>
        <ion-card id="tripChanges">

          <ion-card-content>

            <ion-row>
                <ion-text><b>Trip Name</b></ion-text>
            </ion-row>

            <ion-row>
                <ion-text>Wochentage</ion-text>
                <ion-button color="danger" id="modalWeekDaysTrigger"><i class='bx bxs-time'></i></ion-button>
            </ion-row>
            
            <ion-row>
                <ion-text>Kontakte</ion-text> 
                <ion-button color="danger"><i class='bx bxs-contact'></i></ion-button>
            </ion-row>

            <ion-row>
                <ion-text>Nachricht</ion-text> 
                <ion-button color="danger"><i class='bx bxs-pencil'></i></ion-button>
            </ion-row>

            <ion-row>
                <ion-text>Home-Office Tracker</ion-text>
                <ion-toggle></ion-toggle>  
            </ion-row>

            <ion-button color="danger" expand="block" href="/trips/saved">Save Changes</ion-button>

          </ion-card-content>
        </ion-card>

        <ion-modal trigger="modalWeekDaysTrigger" id="modalWeekdays" css-class="modalWeekdays" :is-open="false" backdrop-dismiss="true"   :initialBreakpoint="0.16">
            <ion-content>
                <ion-row id="modalRow1">
                    <ion-button color="medium" id="weekdayMonday" strong="true">Mo</ion-button>
                    <ion-button color="medium" id="weekdayTuesday" strong="true">Di</ion-button>
                    <ion-button color="medium" id="weekdayWednesday" strong="true">Mi</ion-button>
                    <ion-button color="medium" id="weekdayThursday" strong="true">Do</ion-button>
                </ion-row>
                <ion-row>
                    <ion-button color="medium" id="weekdayFriday" strong="true">Fr</ion-button>
                    <ion-button color="medium" id="weekdaySaturday" strong="true">Sa</ion-button>
                    <ion-button color="medium" id="weekdaySunday" strong="true">So</ion-button>
                </ion-row>
            </ion-content>
        </ion-modal>
</template>

<script>
  import { IonModal, IonCard } from '@ionic/vue';

export default {
  components: {
    IonCard,
    IonModal,
  },
};
</script>
