<template>
  <div class="m-0 p-0 bg-mockup">
    <b-sidebar id="sidebar-variant" title="Sidebar" bg-variant="dark" text-variant="light" shadow>
      <div class="px-2 py-2 sidebar-button text-center">
        <div class="mb-3">
          <b-link class="d-flex flex-column align-items-center">
            <b-icon icon="house" aria-hidden="true" font-scale="3"></b-icon>
            <b class="sidebar-menu">HOME</b>
          </b-link>
        </div>
        <div class="mb-3">
          <b-link class="d-flex flex-column align-items-center">
            <b-icon icon="house" aria-hidden="true" font-scale="3"></b-icon>
            <b class="sidebar-menu">ANTRIAN</b>
          </b-link>
        </div>
        <div class="mb-3">
          <b-link class="d-flex flex-column align-items-center">
            <b-icon icon="justify" aria-hidden="true" font-scale="3"></b-icon>
            <b class="sidebar-menu">REGIS</b>
          </b-link>
        </div>
        <div class="mb-3">
          <b-link class="d-flex flex-column align-items-center">
            <b-icon icon="archive-fill" aria-hidden="true" font-scale="3"></b-icon>
            <b class="sidebar-menu">RAJAL</b>
          </b-link>
        </div>
        <div class="mb-3">
          <b-link class="d-flex flex-column align-items-center">
            <b-icon icon="calendar" aria-hidden="true" font-scale="3"></b-icon>
            <b class="sidebar-menu">RANAP</b>
          </b-link>
        </div>
        <div class="mb-3">
          <b-link class="d-flex flex-column align-items-center">
            <b-icon icon="box-arrow-up" aria-hidden="true" font-scale="3"></b-icon>
            <b class="sidebar-menu">REKMED</b>
          </b-link>
        </div>
        <div class="mb-3">
          <b-link class="d-flex flex-column align-items-center">
            <b-icon icon="laptop" aria-hidden="true" font-scale="3"></b-icon>
            <b class="sidebar-menu">FARMASI</b>
          </b-link>
        </div>
        <div class="mb-3">
          <b-link class="d-flex flex-column align-items-center">
            <b-icon icon="box-arrow-up" aria-hidden="true" font-scale="3"></b-icon>
            <b class="sidebar-menu">RADIOLOGI</b>
          </b-link>
        </div>
        <div class="mb-3">
          <b-link class="d-flex flex-column align-items-center">
            <b-icon icon="laptop" aria-hidden="true" font-scale="3"></b-icon>
            <b class="sidebar-menu">LAB</b>
          </b-link>
        </div>
        <div class="mb-3">
          <b-link class="d-flex flex-column align-items-center">
            <b-icon icon="laptop" aria-hidden="true" font-scale="3"></b-icon>
            <b class="sidebar-menu">KASIR</b>
          </b-link>
        </div>
        <div class="mb-3">
          <b-link class="d-flex flex-column align-items-center">
            <b-icon icon="laptop" aria-hidden="true" font-scale="3"></b-icon>
            <b class="sidebar-menu">SEKRE</b>
          </b-link>
        </div>
      </div>
    </b-sidebar>
    <div style="margin-left: 4.5vw;">
      <base-header class="pb-7 pt-2">
      <!-- Card stats -->
      <b-row class="header-h mb-2">
        <b-col xl="1" md="" sm="">
          <stats-card
            type="dark"
            class="header-h px-4 py-1">
            <b-icon icon="arrow-left" aria-hidden="true" font-scale="3"></b-icon>
          </stats-card>
        </b-col>
        <b-col xl="8" md="" sm="">
          <stats-card
            type="dark"
            class="header-h p-2">
            <div class="d-flex flex-row justify-content-between m-0 p-0">
              <h1 class="ml-2 text-uppercase">Rawat Jalan</h1>
              <b-icon icon="arrow-counterclockwise" aria-hidden="true" font-scale="3"></b-icon>
            </div>
          </stats-card>
        </b-col>
        <b-col xl="3" md="" sm="">
          <stats-card
            type="dark"
            class="header-h p-2">
            <div class="d-flex flex-row justify-content-end m-0 p-0">
              <b-icon icon="search" aria-hidden="true" font-scale="3"></b-icon>
            </div>
          </stats-card>
        </b-col>
      </b-row>
      <b-row class="header-h mb-2">
        <b-col xl="2" md="" sm="">
          <stats-card
            type="dark"
            class="header-h m-0 p-0 text-center">
              <h4 class="m-0 text-uppercase">Nama (Usia)</h4>
              <h1 class="m-0 text-uppercase"><b-icon icon="person" aria-hidden="true" font-scale="1"></b-icon>Ny. Mariana (23)</h1>
          </stats-card>
        </b-col>
        <b-col xl="2" md="" sm="">
          <stats-card
            type="dark"
            class="header-h m-0 p-1 text-center">
              <h4 class="m-0 text-uppercase">Tanggal Lahir</h4>
              <h1 class="m-0 text-uppercase">13 Jan 1997</h1>
          </stats-card>
        </b-col>
        <b-col xl="2" md="" sm="">
          <stats-card
            type="dark"
            class="header-h m-0 p-1 text-center">
              <h4 class="m-0 text-uppercase">Nomor Rekam Medis</h4>
              <h1 class="m-0 text-uppercase">001234567</h1>
          </stats-card>
        </b-col>
        <b-col xl="3" md="" sm="">
          <stats-card
            type="dark"
            class="header-h m-0 p-1 text-center">
              <h4 class="m-0 text-uppercase">DPJP</h4>
              <h1 class="m-0">dr. Febri Bahari, SpPD, KGEH</h1>
          </stats-card>
        </b-col>
        <b-col xl="3" md="" sm="">
          <stats-card
            type="dark"
            class="header-h m-0 p-1 text-center">
              <h4 class="m-0 text-uppercase">Anda Masuk Sebagai</h4>
              <h1 class="m-0"><b-icon icon="person-fill" aria-hidden="true" font-scale="1"></b-icon>dr. Dany Petra, SpPD</h1>
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
                  <h4 class="m-0 text-uppercase">Keluhan Utama</h4>
                  <h2 class="m-0 text-capitalize"><b>KU:</b> Muntah berdarah sejak 1 hari yang lalu.</h2>
              </stats-card>
            </b-col>
          </b-row>
          <b-row class="header-h mb-2">
            <b-col md="12">
              <stats-card
                type="dark"
                class="header-h m-0 p-1 text-left">
                  <h4 class="m-0 text-uppercase">Diagnosis Primer & Sekunder</h4>
                  <h2 class="m-0 text-capitalize"><b>DP:</b> Esophageal varices with bleeding (l85.01) ...</h2>
              </stats-card>
            </b-col>
          </b-row>
        </b-col>
        <b-col md="6" sm="12">
          <stats-card
            type="dark"
            class="header2-h p-2 text-center">
            <b-row class="mb-3">
              <b-col md="4" class="text-uppercase font-weight-bold text-underline">Tanda-Tanda Vital<b-icon icon="justify" aria-hidden="true" font-scale="2"></b-icon></b-col>
              <b-col md="2" class="align-self-center">
                <div class="font-weight-bold p-2" style="font-size: 0.8rem; border-radius: 5px; background: #D0CECF;">H+3</div>
              </b-col>
              <b-col md="6" class="align-self-center">
                <div class="p-2" style="font-size: 0.8rem; border-radius: 5px; background: #F2F2F2;">Last Update: <u class="text-uppercase font-weight-bold">SELASA, 27 OKT 2020, 06.30 WIB.</u></div>
              </b-col>
            </b-row>
            <b-row>
              <b-col class="w-100">
                <div style="background: #06B050; font-size: 0.8rem; border-radius: 5px; height: 6vh;">
                  Kesadaran<br/>
                  <b>Compos Mentis</b>
                  </div>
              </b-col>
              <b-col class="w-100">
                <div style="background: #06B050; font-size: 0.75rem; border-radius: 5px; height: 6vh;">Tekanan Darah<br/>
                  <b>110/70</b><br/>
                  mmHg
                </div>
              </b-col>
              <b-col class="w-100">
                <div style="background: #FF0000; font-size: 0.8rem; border-radius: 5px; height: 6vh;">Laju Nadi<br/>
                  <b>120</b><br/>
                  kali/menit
                </div>
              </b-col>
              <b-col class="w-100">
                <div style="background: #FEFF00; font-size: 0.8rem; border-radius: 5px; height: 6vh;">Laju Napas<br/>
                  <b>20</b><br/>
                  kali/menit
                </div>
              </b-col>
              <b-col class="w-100">
                <div class="bg-success" style="background: #06B050; font-size: 0.8rem; border-radius: 5px; height: 6vh;">Suhu Tubuh<br/>
                  <b>37,3</b><br/>
                  C
                </div>
              </b-col>
              <b-col class="w-100">
                <div style="background: #FEFF00; font-size: 0.8rem; border-radius: 5px; height: 6vh;">EWS<br/>
                  <b>3</b>
                </div>
              </b-col>
            </b-row>
          </stats-card>
        </b-col>
      </b-row>
      <b-row class="header-h mb-2">
        <b-col md="12">
          <b-tabs pills justified class="p-0 bg-default p-2" style="border-radius: 5px">
            <b-tab class="bg-dark" title="Pengkajian Awal" active></b-tab>
            <b-tab class="bg-dark" title="">
              <template #title>Lab/Radiologi<div class="tab-notif" style="right: 68vw;">2</div></template>
            </b-tab>
            <b-tab class="bg-dark" title="CPPT Ranap"></b-tab>
            <b-tab class="bg-dark" title="">
              <template #title>Informed Consent<div class="tab-notif" style="right: 41vw; background: yellow; color: red;">!</div></template>
            </b-tab>
            <b-tab class="bg-dark" title="">
              <template #title>Skrining<div class="tab-notif" style="right: 27.5vw;">1</div></template>
            </b-tab>
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
            <h4 class="text-center text-uppercase my-3">Riwayat Berobat</h4>
            <div class="d-flex flex-column mx-4" style="border-left: 5px solid #B0AAB0;">
              <div class="w-100 my-4 ml-5">
                <b-icon icon="circle" aria-hidden="true" font-scale="3" style="position: absolute; left: 1.2vw; border: 8px solid; border-radius: 100px; background: #fff; color: #002060;"></b-icon>
                <h2 class="m-0 font-weight-bold text-underline">25 Okt 2020</h2>
                <h3 class="m-0 font-weight-bold text-underline">IGD-RANAP</h3>
              </div>
              <div class="w-100 my-4 ml-5">
                <b-icon icon="circle" aria-hidden="true" font-scale="3" style="position: absolute; left: 1.2vw; border: 8px solid; border-radius: 100px; background: #fff; color: #002060;"></b-icon>
                <h2 class="m-0">3 Okt 2020</h2>
                <h3 class="m-0">RAJAL</h3>
              </div>
              <div class="w-100 my-4 ml-5">
                <b-icon icon="circle" aria-hidden="true" font-scale="3" style="position: absolute; left: 1.2vw; border: 8px solid; border-radius: 100px; background: #fff; color: #002060;"></b-icon>
                <h2 class="m-0">4 Sept 2020</h2>
                <h3 class="m-0">RAJAL</h3>
              </div>
              <div class="w-100 my-4 ml-5">
                <b-icon icon="circle" aria-hidden="true" font-scale="3" style="position: absolute; left: 1.2vw; border: 8px solid; border-radius: 100px; background: #fff; color: #002060;"></b-icon>
                <h2 class="m-0">20 Jun 2020</h2>
                <h3 class="m-0">IGD</h3>
              </div>
              <div class="w-100 my-4 ml-5">
                <b-icon icon="circle" aria-hidden="true" font-scale="3" style="position: absolute; left: 1.2vw; border: 8px solid; border-radius: 100px; background: #fff; color: #002060;"></b-icon>
                <h2 class="m-0">1 Feb 2020</h2>
                <h3 class="m-0">IGD-RANAP</h3>
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
                  class="w-100 white-bg" style="height: 55vh">
                  <b-card no-body class="w-100" style="overflow-y: auto; overflow-x: hidden; height: 55vh;">
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
              <b-col xl="10" md="8" sm="12" style="height: 55vh; overflow-y: auto; border-radius: 5px;" class="white-bg">
                <stats-card
                  type="dark"
                  class="mb-4 h-100 p-5 h-100 white-bg border-0">
                    <b-icon icon="laptop" aria-hidden="true" font-scale="2" style="position: absolute; top: 0; right: 0; border-radius: 100px; background: #D9E3F1; color: #000;"></b-icon>
                    <h2 class="mb-3 text-center text-uppercase">Pengkajian Awal Pasien Rawat Inap</h2>
                    <b-row>
                      <b-col md="5" sm="12" class="font-weight-bold ml-5">
                        <b-icon icon="circle" aria-hidden="true" font-scale="1" style="position: absolute; top: 0.5vh; left: -1vw; border-radius: 100px; background: #06B050; color: #000;"></b-icon>Autoanamnesis
                      </b-col>
                      <b-col md="6" sm="12" class="font-weight-bold">
                        Tanggal Masuk Bangsal: <u>Senin, 26 Okt 2020, 12.00 WIB</u>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col md="5" sm="12" class="font-weight-bold ml-5">
                        <b-icon icon="circle" aria-hidden="true" font-scale="1" style="position: absolute; top: 0.5vh; left: -1vw; border-radius: 100px; background: #fff; color: #000;"></b-icon><u>Alloanamnesis: Tn. Rizal (Suami)</u>
                      </b-col>
                      <b-col md="6" sm="12" class="font-weight-bold">
                        Anamnesis oleh: <u>dr. Sukma Ayu</u>
                      </b-col>
                    </b-row>
                    <b-card class="border-dark p-2 my-1 mr-3 mt-3 white-bg">
                      <b-icon icon="pencil" aria-hidden="true" font-scale="2" style="position: absolute; top: 0; right: -2.2vw; border-radius: 100px; background: #06B050; color: #000;"></b-icon>
                      <b class="text-uppercase">Keluhan Utama: </b>
                      Muntah darah sejak 1 hari yang lalu.
                    </b-card>
                    <b-card class="border-dark p-2 my-1 mr-3 white-bg">
                      <b-icon icon="pencil" aria-hidden="true" font-scale="2" style="position: absolute; top: 0; right: -2.2vw; border-radius: 100px; background: #06B050; color: #000;"></b-icon>
                      <b class="text-uppercase">Riwayat Penyakit Sekarang: </b>
                      Pasien mengalami muntah berdarah sejak 1 hari yang lalu. Muntah terlihat warna kehitaman disertai makanan. Muntah sudah dialami pasien 4 kali sejak 1 hari SMRS, dengan banyak sekitar X botol aqua setiap muntah. Pas mengeluhkan BAB berwarna senerti aspal. Pasien BAB sebanyak 1 kali sejak kemarin konsistensi setengah padat. Pasien tidak pernah mengalami keluhan serupa sebelumnya. Keluhan demam disangkal.

                    </b-card>
                    <b-card class="border-dark p-2 my-1 mr-3 white-bg">
                      <b-icon icon="pencil" aria-hidden="true" font-scale="2" style="position: absolute; top: 0; right: -2.2vw; border-radius: 100px; background: #06B050; color: #000;"></b-icon>
                      <b class="text-uppercase">Riwayat Penyakit Dahulu: </b>
                      Pasien sebelumnya pernah mengalami gejala mata kuning pada 2 tahun lalu, membaik dengan obat. Pasien tidak memiliki penyakit gula maupun darah tinggi. Pasien tinggal di kampung dan mengaku tidak pernah diimunisasi. 
                    </b-card>
                    <b-card class="border-dark p-2 my-1 mr-3 white-bg">
                      <b-icon icon="pencil" aria-hidden="true" font-scale="2" style="position: absolute; top: 0; right: -2.2vw; border-radius: 100px; background: #06B050; color: #000;"></b-icon>
                      <b class="text-uppercase">Riwayat Penyakit Keluarga: </b>
                      Kakak pasien juga pernah mengalami kasus muntah darah dan mata kuning. Saat ini kakak pasien sudah meninggal karena kanker liver. 
                    </b-card>
                    <b-card class="border-dark p-2 my-1 mr-3 white-bg">
                      <b-icon icon="pencil" aria-hidden="true" font-scale="2" style="position: absolute; top: 0; right: -2.2vw; border-radius: 100px; background: #06B050; color: #000;"></b-icon>
                      <b class="text-uppercase">Riwayat Penyakit Lain: </b>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
  background: #D9E3F1;
}

.card-stats .card-body {
  padding: 0;
  color: #000 !important;
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

.tab-notif {
    border-radius: 100px;
    background: red;
    color: white;
    position: absolute;
    padding: 0 6px;
    top: 0;
}

.tab-list {
  padding: 0;
}

/* .nav-pills {
  background: black;
} */

.nav-pills {
  font-weight: bold !important;
  height: 45px;
}

.nav-link {
  background: #7F7F7F !important;
  color: #172B4D !important;
  font-size: 0.9rem !important;
  width: 100%;
  height: 45px;
  margin: 3px;
  font-weight: bold !important;
}

.nav-link.active {
  background: #F9F544 !important;
  color: #172B4D !important;
  font-size: 0.9rem !important;
  width: 100%;
  height: 45px;
  margin: 3px;
  font-weight: bold !important;
}

.card-header {
  padding: 0 !important;
}

.white-bg {
  background: #ffffff !important;
}

.sidebar-button {
  height: 100vh;
  width: 4.5vw;
  left: 0;
  position: fixed;
  background: #172B4D;
  z-index: 999;
}

.sidebar-menu {
  font-size: 0.7rem; 
  text-align: center;
}

.bg-mockup {
  width: 100%;
  height: 80px;
  background-image: 
    repeating-linear-gradient(
      170deg,
      #FAD826,
      #FAD826 100px,
      #164393 100px,
      #164393 200px /* determines size */
    );
}

.col-md {
  padding-right: 10px;
  padding-left: 10px;
}

.col-md-12 {
  padding-right: 10px;
  padding-left: 10px;
}

.col-md-11 {
  padding-right: 10px;
  padding-left: 10px;
}

.col-md-10 {
  padding-right: 10px;
  padding-left: 10px;
}

.col-md-9 {
  padding-right: 10px;
  padding-left: 10px;
}

.col-md-8 {
  padding-right: 10px;
  padding-left: 10px;
}

.col-md-7 {
  padding-right: 10px;
  padding-left: 10px;
}

.col-md-6 {
  padding-right: 10px;
  padding-left: 10px;
}

.col-md-5 {
  padding-right: 10px;
  padding-left: 10px;
}

.col-md-4 {
  padding-right: 10px;
  padding-left: 10px;
}

.col-md-3 {
  padding-right: 10px;
  padding-left: 10px;
}

.col-md-2 {
  padding-right: 3px;
  padding-left: 3px;
}

.col-md-1 {
  padding-right: 10px;
  padding-left: 10px;
}
</style>
