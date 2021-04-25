<template>
  <div class="bg-gradient-warning">
    <base-header class="pb-7 pt-2">
      <!-- Card stats -->
      <b-row class="header-h mb-2">
        <b-col xl="1" md="" sm="">
          <stats-card
            type="dark"
            icon="ni ni-chart-pie-35"
            class="header-h p-2">
          </stats-card>
        </b-col>
        <b-col xl="8" md="" sm="">
          <stats-card
            type="dark"
            icon="ni ni-chart-pie-35"
            class="header-h p-2">
              <h1 class="ml-2 text-uppercase">Rawat Jalan</h1>
          </stats-card>
        </b-col>
        <b-col xl="3" md="" sm="">
          <stats-card
            type="dark"
            icon="ni ni-chart-pie-35"
            class="header-h p-2">
          </stats-card>
        </b-col>
      </b-row>
      <b-row class="header-h mb-2">
        <b-col xl="2" md="" sm="">
          <stats-card
            type="dark"
            class="header-h m-0 p-1 text-center">
              <h5 class="m-0 text-uppercase">Nama (Usia)</h5>
              <h1 class="m-0 text-uppercase">Ny. Mariana (23)</h1>
          </stats-card>
        </b-col>
        <b-col xl="2" md="" sm="">
          <stats-card
            type="dark"
            class="header-h m-0 p-1 text-center">
              <h5 class="m-0 text-uppercase">Tanggal Lahir</h5>
              <h1 class="m-0 text-uppercase">13 Jan 1997</h1>
          </stats-card>
        </b-col>
        <b-col xl="2" md="" sm="">
          <stats-card
            type="dark"
            class="header-h m-0 p-1 text-center">
              <h5 class="m-0 text-uppercase">Nomor Rekam Medis</h5>
              <h1 class="m-0 text-uppercase">001234567</h1>
          </stats-card>
        </b-col>
        <b-col xl="3" md="" sm="">
          <stats-card
            type="dark"
            class="header-h m-0 p-1 text-center">
              <h5 class="m-0 text-uppercase">DPJP</h5>
              <h1 class="m-0 text-uppercase">dr. Febri Bahari, SpPD, KGEH</h1>
          </stats-card>
        </b-col>
        <b-col xl="3" md="" sm="">
          <stats-card
            type="dark"
            class="header-h m-0 p-1 text-center">
              <h5 class="m-0 text-uppercase">Anda Masuk Sebagai</h5>
              <h1 class="m-0 text-uppercase">dr. Dany Petra, SpPD</h1>
          </stats-card>
        </b-col>
      </b-row>
      <b-row class="mb-2">
        <b-col md="6" sm="12">
          <b-row class="header-h mb-2">
            <b-col md="12">
              <stats-card
                type="dark"
                class="header-h m-0 p-1 text-center">
                  <h5 class="m-0 text-uppercase">Keluhan Utama</h5>
                  <h2 class="m-0 text-capitalize">KU: Muntah berdarah sejak 1 hari yang lalu.</h2>
              </stats-card>
            </b-col>
          </b-row>
          <b-row class="header-h mb-2">
            <b-col md="12">
              <stats-card
                type="dark"
                class="header-h m-0 p-1 text-center">
                  <h5 class="m-0 text-uppercase">Diagnosis Primer & Sekunder</h5>
                  <h2 class="m-0 text-capitalize">DP: Esophageal varices with bleeding (l85.01) ...</h2>
              </stats-card>
            </b-col>
          </b-row>
        </b-col>
        <b-col md="6" sm="12">
          <stats-card
            type="dark"
            class="header2-h">
            <b-row>
              <b-col class="text-uppercase">Tanda-Tanda Vital</b-col>
              <b-col>H+3</b-col>
              <b-col>Last Update: SELASA, 27 OKT 2020, 06.30 WIB.</b-col>
            </b-row>
            <b-row>
              <b-col></b-col>
              <b-col></b-col>
              <b-col></b-col>
              <b-col></b-col>
              <b-col></b-col>
              <b-col></b-col>
            </b-row>
          </stats-card>
        </b-col>
      </b-row>
      <b-row class="header-h mb-2">
        <b-col md="12">
          <card type="default" header-classes="bg-transparent" class="header-h p-0">
            <b-tabs pills class="p-2">
              <b-tab title="Tab 1" active></b-tab>
              <b-tab title="Tab 2"></b-tab>
            </b-tabs>
          </card>
        </b-col>
      </b-row>
    </base-header>

    <b-container fluid class="mt--7">
      <b-row>
        <b-col xl="2" md="4" sm="12">
          <stats-card title="Riwayat Berobat"
            type="dark"
            sub-title=""
            class="mb-4 container-h">
          </stats-card>
        </b-col>
        <b-col xl="10" md="8" sm="12">
          <card type="default" header-classes="bg-transparent" class="mb-4 container-h">
            <b-row class="h-100">
              <b-col xl="2" md="4" sm="12" class="h-100">
                <stats-card title=""
                  type="dark"
                  sub-title=""
                  class="mb-4 h-100">
                  <b-card no-body>
                    <b-tabs pills card vertical>
                      <b-tab title="Tab 1" active><b-card-text>Tab contents 1</b-card-text></b-tab>
                      <b-tab title="Tab 2"><b-card-text>Tab contents 2</b-card-text></b-tab>
                      <b-tab title="Tab 3"><b-card-text>Tab contents 3</b-card-text></b-tab>
                    </b-tabs>
                  </b-card>
                </stats-card>
              </b-col>
              <b-col xl="10" md="8" sm="12" class="h-100">
                <stats-card title="Pengkajian Awal Pasien Rawat Inap"
                  type="dark"
                  sub-title=""
                  class="mb-4 h-100">
                  <template slot="footer">
                    <span class="text-success mr-2">Keluhan Utama</span>
                    <span class="text-nowrap">Riwayat Penyakit Sekarang</span>
                  </template>
                </stats-card>
              </b-col>
            </b-row>
          </card>
        </b-col>
      </b-row>
    </b-container>

    <!--Charts-->
    <!-- <b-container fluid class="mt--7">
      <b-row>
        <b-col xl="8" class="mb-5 mb-xl-0">
          <card type="default" header-classes="bg-transparent">
            <b-row align-v="center" slot="header">
              <b-col>
                <h6 class="text-light text-uppercase ls-1 mb-1">Overview</h6>
                <h5 class="h3 text-white mb-0">Sales value</h5>
              </b-col>
              <b-col>
                <b-nav class="nav-pills justify-content-end">
                </b-nav>
              </b-col>
            </b-row>
          </card>
        </b-col>

        <b-col xl="4" class="mb-5 mb-xl-0">
          <card header-classes="bg-transparent">
            <b-row align-v="center" slot="header">
              <b-col>
                <h6 class="text-uppercase text-muted ls-1 mb-1">Performance</h6>
                <h5 class="h3 mb-0">Total orders</h5>
              </b-col>
            </b-row>
          </card>
        </b-col>
      </b-row> -->
      <!-- End charts-->

      <!--Tables-->
      <!-- <b-row class="mt-5">
        <b-col xl="8" class="mb-5 mb-xl-0">
          <page-visits-table></page-visits-table>
        </b-col>
        <b-col xl="4" class="mb-5 mb-xl-0">
          <social-traffic-table></social-traffic-table>
        </b-col>
      </b-row> -->
      <!--End tables-->
    <!-- </b-container> -->

  </div>
</template>
<script>
  // Components
  import BaseProgress from '@/components/BaseProgress';
  import StatsCard from '@/components/Cards/StatsCard';

  // Tables
  import SocialTrafficTable from './Dashboard/SocialTrafficTable';
  import PageVisitsTable from './Dashboard/PageVisitsTable';

  export default {
    components: {
      BaseProgress,
      StatsCard,
      PageVisitsTable,
      SocialTrafficTable
    },
    data() {
      return {
        // bigLineChart: {
        //   allData: [
        //     [0, 20, 10, 30, 15, 40, 20, 60, 60],
        //     [0, 20, 5, 25, 10, 30, 15, 40, 40]
        //   ],
        //   activeIndex: 0,
        //   chartData: {
        //     datasets: [
        //       {
        //         label: 'Performance',
        //         data: [0, 20, 10, 30, 15, 40, 20, 60, 60],
        //       }
        //     ],
        //     labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        //   },
        //   extraOptions: chartConfigs.blueChartOptions,
        // },
        // redBarChart: {
        //   chartData: {
        //     labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        //     datasets: [{
        //       label: 'Sales',
        //       data: [25, 20, 30, 22, 17, 29]
        //     }]
        //   },
        //   extraOptions: chartConfigs.blueChartOptions
        // }
      };
    },
    methods: {
      initBigChart(index) {
        let chartData = {
          datasets: [
            {
              label: 'Performance',
              data: this.bigLineChart.allData[index]
            }
          ],
          labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        };
        this.bigLineChart.chartData = chartData;
        this.bigLineChart.activeIndex = index;
      }
    },
    mounted() {
      this.initBigChart(0);
    }
  };
</script>
<style>
.el-table .cell{
  padding-left: 0px;
  padding-right: 0px;
}

.card-stats .card-body {
    padding: 0;
}

.header-h {
    height: 6.2vh;
}

.header2-h {
    height: 13vh;
}

.container-h {
    height: 60vh;
}
</style>
