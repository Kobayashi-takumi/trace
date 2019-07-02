<template>
    <div id="to-do-detail">

            <v-container>
                <v-layout row align-start>
                    <v-flex>
                        <v-card>
                            <v-toolbar color="indigo" dark>

                            <v-toolbar-title>My files</v-toolbar-title>

                            <v-spacer></v-spacer>

                            <v-btn icon>
                                <v-icon>search</v-icon>
                            </v-btn>
                            </v-toolbar>

                            <v-list two-line subheader>
                            <v-subheader inset>Files</v-subheader>

                            <v-list-tile
                                v-for="item in items"
                                :key="item.title"
                                avatar
                            >
                                <v-list-tile-avatar>
                                <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
                                </v-list-tile-avatar>

                                <v-list-tile-content>
                                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                                <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                                </v-list-tile-content>

                                <v-list-tile-action>
                                <v-btn icon ripple>
                                    <v-icon color="grey lighten-1">info</v-icon>
                                </v-btn>
                                </v-list-tile-action>
                            </v-list-tile>
                            </v-list>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
    </div>
</template>

<script>
export default {
    name: 'to-do-detail',
}
</script>

<style>

</style>
