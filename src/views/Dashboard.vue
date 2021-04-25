<template>
  <div>

    <base-header class="pb-6 pb-8 pt-5 pt-md-8">
    </base-header>

    <b-container fluid class="mt--7">
      <b-row>
        <b-col xl="8" class="mb-5 mb-xl-0">
          <card type="default" header-classes="bg-transparent">
            <b-row align-v="center" slot="header">
              <b-col>
                <h1 class="text-light text-uppercase">Test Coding</h1>
                <a href="http://frontend.kerjajarakjauh.id/">
                  <button>Soal disini</button>
                </a>
              </b-col>
            </b-row>
          </card>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>
<script>
  // Components
  import BaseProgress from '@/components/BaseProgress';
  import StatsCard from '@/components/Cards/StatsCard';

  export default {
    components: {
      BaseProgress,
      StatsCard,
    },
  };
</script>
<style>
.el-table .cell{
  padding-left: 0px;
  padding-right: 0px;
}
</style>
