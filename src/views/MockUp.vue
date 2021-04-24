<template>
  <div class="bg-gradient-warning">
    <base-header class="pb-7 pt-2">
      <!-- Card stats -->
      <b-row class="header-h mb-2">
          <b-col xl="1" md="" sm="">
              <stats-card title=""
                      type="dark"
                      sub-title=""
                      icon="ni ni-chart-pie-35"
                      class="header-h">
              </stats-card>
          </b-col>
          <b-col xl="8" md="" sm="">
              <stats-card title="Rawat Jalan"
                      type="dark"
                      sub-title=""
                      icon="ni ni-chart-pie-35"
                      class="header-h">
              </stats-card>
          </b-col>
          <b-col xl="3" md="" sm="">
              <stats-card title=""
                      type="dark"
                      sub-title=""
                      icon="ni ni-chart-pie-35"
                      class="header-h">
              </stats-card>
          </b-col>
      </b-row>
      <b-row class="header-h mb-2">
          <b-col xl="2" md="" sm="">
              <stats-card title="Nama (Usia)"
                      type="dark"
                      sub-title=""
                      icon="ni ni-chart-pie-35"
                      class="header-h">
              </stats-card>
          </b-col>
          <b-col xl="2" md="" sm="">
              <stats-card title="Tanggal Lahir"
                      type="dark"
                      sub-title=""
                      class="header-h">
              </stats-card>
          </b-col>
          <b-col xl="2" md="" sm="">
              <stats-card title="Nomor Rekam Medis"
                      type="dark"
                      sub-title=""
                      class="header-h">
              </stats-card>
          </b-col>
          <b-col xl="3" md="" sm="">
              <stats-card title="DPJP"
                      type="dark"
                      sub-title=""
                      class="header-h">
              </stats-card>
          </b-col>
          <b-col xl="3" md="" sm="">
              <stats-card title="Anda Masuk Sebagai"
                      type="dark"
                      sub-title=""
                      icon="ni ni-chart-pie-35"
                      class="header-h">
              </stats-card>
          </b-col>
      </b-row>
      <b-row class="mb-2">
        <b-col md="6" sm="12">
            <b-row class="header-h mb-2">
                <b-col md="12">
                    <stats-card title="Keluhan Utama"
                        type="dark"
                        sub-title=""
                        class="header-h">
                    </stats-card>
                </b-col>
            </b-row>
            <b-row class="header-h mb-2">
                <b-col md="12">
                    <stats-card title="Diagnosis Primer & Sekunder"
                        type="dark"
                        sub-title=""
                        class="header-h">
                    </stats-card>
                </b-col>
            </b-row>
        </b-col>
        <b-col md="6" sm="12">
            <stats-card title="Tanda-Tanda Vital"
                      type="dark"
                      sub-title=""
                      icon="ni ni-chart-pie-35"
                      class="header2-h">
              </stats-card>
        </b-col>
      </b-row>
      <b-row class="header-h mb-2">
          <b-col md="12">
            <card type="default" header-classes="bg-transparent" class="header-h">Tab</card>
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
