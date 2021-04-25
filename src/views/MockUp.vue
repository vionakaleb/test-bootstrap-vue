<template>
  <div class="m-0 p-0">
    <b-sidebar id="sidebar-variant" title="Sidebar" bg-variant="dark" text-variant="light" shadow>
      <div class="px-3 py-2">
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
      </div>
    </b-sidebar>
    <div>
      <base-header class="pb-7 pt-2">
      <!-- Card stats -->
      <b-row class="header-h mb-2">
        <b-col xl="1" md="" sm="">
          <stats-card
            type="dark"
            class="header-h p-2">
          </stats-card>
        </b-col>
        <b-col xl="8" md="" sm="">
          <stats-card
            type="dark"
            class="header-h p-2">
              <h1 class="ml-2 text-uppercase">Rawat Jalan</h1>
          </stats-card>
        </b-col>
        <b-col xl="3" md="" sm="">
          <stats-card
            type="dark"
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
              <h1 class="m-0">dr. Febri Bahari, SpPD, KGEH</h1>
          </stats-card>
        </b-col>
        <b-col xl="3" md="" sm="">
          <stats-card
            type="dark"
            class="header-h m-0 p-1 text-center">
              <h5 class="m-0 text-uppercase">Anda Masuk Sebagai</h5>
              <h1 class="m-0">dr. Dany Petra, SpPD</h1>
          </stats-card>
        </b-col>
      </b-row>
      <b-row class="mb-2">
        <b-col md="6" sm="12">
          <b-row class="header-h mb-2">
            <b-col md="12">
              <stats-card
                type="dark"
                class="header-h m-0 p-1 text-left">
                  <h5 class="m-0 text-uppercase">Keluhan Utama</h5>
                  <h2 class="m-0 text-capitalize">KU: Muntah berdarah sejak 1 hari yang lalu.</h2>
              </stats-card>
            </b-col>
          </b-row>
          <b-row class="header-h mb-2">
            <b-col md="12">
              <stats-card
                type="dark"
                class="header-h m-0 p-1 text-left">
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
              <b-col md="4" class="text-uppercase">Tanda-Tanda Vital</b-col>
              <b-col md="2">H+3</b-col>
              <b-col md="6">Last Update: SELASA, 27 OKT 2020, 06.30 WIB.</b-col>
            </b-row>
            <b-row>
              <b-col md="2">
                <div class="bg-success" style="border-radius: 5px; height: 6vh;">Kesadaran</div>
              </b-col>
              <b-col md="2">
                <div class="bg-success" style="border-radius: 5px; height: 6vh;">Tekanan Darah</div>
              </b-col>
              <b-col md="2">
                <div class="bg-danger" style="border-radius: 5px; height: 6vh;">Laju Nadi</div>
              </b-col>
              <b-col md="2">
                <div class="bg-warning" style="border-radius: 5px; height: 6vh;">Laju Napas</div>
              </b-col>
              <b-col md="2">
                <div class="bg-success" style="border-radius: 5px; height: 6vh;">Suhu Tubuh</div>
              </b-col>
              <b-col md="2">
                <div class="bg-warning" style="border-radius: 5px; height: 6vh;">EWS</div>
              </b-col>
            </b-row>
          </stats-card>
        </b-col>
      </b-row>
      <b-row class="header-h mb-2">
        <b-col md="12">
          <b-tabs pills justified class="p-0 bg-default p-2" style="border-radius: 5px">
            <b-tab class="bg-dark" title="Pengkajian Awal" active></b-tab>
            <b-tab class="bg-dark" title="Lab/Radiologi"></b-tab>
            <b-tab class="bg-dark" title="CPPT Ranap"></b-tab>
            <b-tab class="bg-dark" title="Informed Consent"></b-tab>
            <b-tab class="bg-dark" title="Skrining"></b-tab>
            <b-tab class="bg-dark" title="Rekonsiliasi Obat"></b-tab>
            <b-tab class="bg-dark" title="Resume Medis"></b-tab>
          </b-tabs>
        </b-col>
      </b-row>
    </base-header>

    <b-container fluid class="mt--7">
      <b-row>
        <b-col xl="2" md="4" sm="12">
          <stats-card
            type="dark"
            sub-title=""
            class="mb-4 container-h">
            <h2 class="text-center">Riwayat Berobat</h2>
            <div class="d-flex flex-column" style="border-left: 5px solid #B0AAB0;">
              <div class="w-100 my-4">
                <h2>25 Okt 2020</h2>
                <h3>IGD-RANAP</h3>
              </div>
              <div class="w-100 my-4">
                <h2>3 Okt 2020</h2>
                <h3>RAJAL</h3>
              </div>
              <div class="w-100 my-4">
                <h2>4 Sept 2020</h2>
                <h3>RAJAL</h3>
              </div>
              <div class="w-100 my-4">
                <h2>20 Jun 2020</h2>
                <h3>IGD</h3>
              </div>
              <div class="w-100 my-4">
                <h2>1 Feb 2020</h2>
                <h3>IGD-RANAP</h3>
              </div>
            </div>
          </stats-card>
        </b-col>
        <b-col xl="10" md="8" sm="12">
          <card type="default" header-classes="bg-transparent" class="mb-4 container-h">
            <b-row class="h-100">
              <b-col xl="2" md="4" sm="12" class="h-100">
                <stats-card
                  type="dark"
                  class="h-100 w-100">
                  <b-card no-body class="w-100" style="overflow-y: auto; overflow-x: hidden; height: 53vh;">
                    <b-tabs pills card vertical fill justified nav-wrapper-class="p-0 w-100 tab-list">
                      <b-tab title="Anamnesis" active></b-tab>
                      <b-tab title="Riw. Alergi"></b-tab>
                      <b-tab title="Status Nyeri"></b-tab>
                      <b-tab title="Fungsional"></b-tab>
                      <b-tab title="Resiko Jatuh"></b-tab>
                      <b-tab title="Skrining Gizi"></b-tab>
                      <b-tab title="Edukasi"></b-tab>
                      <b-tab title="Pem. Fisik"></b-tab>
                      <b-tab title="Lab"></b-tab>
                      <b-tab title="Radiologi"></b-tab>
                      <b-tab title="Daf. Masalah"></b-tab>
                      <b-tab title="Tatalaksana"></b-tab>
                      <b-tab title="Riw. Obat"></b-tab>
                    </b-tabs>
                  </b-card>
                </stats-card>
              </b-col>
              <b-col xl="10" md="8" sm="12" class="h-100">
                <stats-card
                  type="dark"
                  class="mb-4 h-100 p-5 white-bg">
                    <h2 class="mb-3 text-center text-uppercase">Pengkajian Awal Pasien Rawat Inap</h2>
                    <b-row>
                      <b-col md="6" sm="12">
                        Autoanamnesis
                      </b-col>
                      <b-col md="6" sm="12">
                        Tanggal Masuk Bangsal: <u>Senin, 26 Okt 2020, 12.00 WIB</u>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col md="6" sm="12">
                        <u>Alloanamnesis: Tn. Rizal (Suami)</u>
                      </b-col>
                      <b-col md="6" sm="12">
                        Anamnesis oleh: <u>dr. Sukma Ayu</u>
                      </b-col>
                    </b-row>
                    <b-card class="border-dark p-2 my-1 mt-3 white-bg">
                      <b class="text-uppercase">Keluhan Utama: </b>
                      Muntah darah sejak 1 hari yang lalu.
                    </b-card>
                    <b-card class="border-dark p-2 my-1 white-bg">
                      <b class="text-uppercase">Riwayat Penyakit Sekarang: </b>
                      Muntah darah sejak 1 hari yang lalu.
                    </b-card>
                    <b-card class="border-dark p-2 my-1 white-bg">
                      <b class="text-uppercase">Riwayat Penyakit Dahulu: </b>
                      Muntah darah sejak 1 hari yang lalu.
                    </b-card>
                    <b-card class="border-dark p-2 my-1 white-bg">
                      <b class="text-uppercase">Riwayat Penyakit Keluarga: </b>
                      Muntah darah sejak 1 hari yang lalu.
                    </b-card>
                </stats-card>
              </b-col>
            </b-row>
          </card>
        </b-col>
      </b-row>
    </b-container>
  </div>
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

.card {
  background-color: #D9E3F1;
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

.tab-list {
  padding: 0;
}

/* .nav-pills {
  background-color: black;
} */

.nav-link {
  background: #7F7F7F !important;
  color: #172B4D !important;
  font-size: 0.9rem !important;
  width: 100%;
  margin: 3px;
}

.nav-link.active {
  background: #F9F544 !important;
  color: #172B4D !important;
  font-size: 0.9rem !important;
  width: 100%;
  margin: 3px;
}

.card-header {
  padding: 0 !important;
}

.white-bg {
  background-color: #ffffff !important;
}
</style>
