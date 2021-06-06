<template>
  <v-row justify="center">
    <v-btn color="primary" dark @click.stop="dialog = true">
      {{ btnName }}
    </v-btn>

    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="text-h5">
          {{ mainMessage }}
        </v-card-title>

        <v-card-text>
          {{ sbMessage }}
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialog = false">
            戻る
          </v-btn>

          <v-btn color="green darken-1" text @click="agreeAction()">
            {{ agree }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    btnName: String,
    mainMessage: String,
    sbMessage: String,
    agree: String,
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    agreeAction() {
      this.dialog = false;
      console.log("認証します");
    },
  },
};
</script>
