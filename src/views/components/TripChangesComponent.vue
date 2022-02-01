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
                <ion-text>Nachricht</ion-text> 
                <ion-button color="danger" id="modalMessageTrigger"><i class='bx bxs-pencil'></i></ion-button>
            </ion-row>
            
            <ion-row>
                <ion-text>Kontakte</ion-text> 
                <ion-button color="danger" id="modalContactTrigger"><i class='bx bxs-contact'></i></ion-button>
            </ion-row>

            <ion-row>
                <ion-text>Home-Office Tracker</ion-text>
                <ion-toggle></ion-toggle>  
            </ion-row>

            <ion-button color="danger" expand="block" href="/trips/saved">Save Changes</ion-button>

          </ion-card-content>
        </ion-card>

        <ion-modal trigger="modalWeekDaysTrigger" :is-open="false" backdrop-dismiss="true"   :initialBreakpoint="0.48">
            <ion-content>
                <div>
                    <h3>Wochentage</h3>
                    <ion-row class="weekday">
                        <ion-text>Montag</ion-text>
                        <ion-checkbox color="danger"></ion-checkbox>
                    </ion-row>
                    <ion-row class="weekday">
                        <ion-text>Dienstag</ion-text>
                        <ion-checkbox color="danger"></ion-checkbox>
                    </ion-row>
                    <ion-row class="weekday">
                        <ion-text>Mittwoch</ion-text>
                        <ion-checkbox color="danger"></ion-checkbox>
                    </ion-row>
                    <ion-row class="weekday">
                        <ion-text>Donnerstag</ion-text>
                        <ion-checkbox color="danger"></ion-checkbox>
                    </ion-row>
                    <ion-row class="weekday">
                        <ion-text>Freitag</ion-text>
                        <ion-checkbox color="danger"></ion-checkbox>
                    </ion-row>
                    <ion-row class="weekday">
                        <ion-text>Samstag</ion-text>
                        <ion-checkbox color="danger"></ion-checkbox>
                    </ion-row>
                    <ion-row class="weekday">
                        <ion-text>Sonntag</ion-text>
                        <ion-checkbox color="danger"></ion-checkbox>
                    </ion-row>
                    <ion-button color="danger" expand="block">Save Changes</ion-button>
                </div>

            </ion-content>
        </ion-modal>

        <ion-modal trigger="modalMessageTrigger" :is-open="false" backdrop-dismiss="true" :initialBreakpoint="0.32">
            <ion-content>
                <div>

                    <h3>Nachricht</h3>
                    <ion-textarea placeholder="placeholder" rows="6" cols="20" background-color="medium"></ion-textarea>
                    <ion-button color="danger" expand="block">Save Changes</ion-button>
                
                </div>
            </ion-content>
        </ion-modal>

        <ion-modal trigger="modalContactTrigger" :is-open="false" backdrop-dismiss="true" :initialBreakpoint="0.32">
            <ion-content>
                <div>

                    <h3>Kontakte</h3>
                    <ion-row id="addContact">
                        <ion-input inputmode="email"></ion-input>
                        <ion-button color="danger"><i class='bx bx-plus-medical' ></i></ion-button>
                    </ion-row>
                    <ion-row id="listContacts">
                        <ion-text>example@gmail.com</ion-text>
                        <ion-text>example@gmail.com</ion-text>
                        <ion-text>example@gmail.com</ion-text>
                        <ion-text>example@gmail.com</ion-text>
                        <ion-text>example@gmail.com</ion-text>
                    </ion-row>

                </div>
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
