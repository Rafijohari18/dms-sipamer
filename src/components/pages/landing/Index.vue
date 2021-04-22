<template>
  <div class="page-container custom">
    <md-app md-waterfall md-mode="overlap">
      <md-app-toolbar class="md-primary md-large align-items-start">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="md-toolbar-row flex-column align-items-start">
                <span class="md-title ml-0 bold"
                  >Dashboard Monitoring System
                </span>
                <h5>Tanggal : {{ moment().format("Do MMMM YYYY") }}</h5>
              </div>
            </div>
            <div class="col-md-6">
              <div class="d-flex justify-content-end">
                <button
                  class="ml-auto btn btn-primary purple"
                  @click="resetdata()"
                >
                  Reset Data
                  <md-icon>refresh</md-icon>
                </button>
              </div>
            </div>
          </div>
        </div>
      </md-app-toolbar>
      <md-app-content>
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-xl-3">
              <div class="card mb-1" id="card-persen">
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <div class="ml-0">
                      <div class="title-card-persen">PESK</div>
                      <div class="text-large">
                        <h3
                          class="mount-card-persen"
                          v-if="jumlahPesk.length > 0"
                        >
                          {{ sumpesk(jumlahPesk) }} / {{ wadahPesk }} KG
                        </h3>
                        <h3 class="mount-card-persen" v-else>
                          0 / {{ wadahThermometer }} KG
                        </h3>
                      </div>
                    </div>
                  </div>

                  <md-progress-bar
                    md-mode="determinate"
                    v-if="jumlahPesk.length > 0"
                    :md-value="
                      Number((sumpesk(jumlahPesk) / wadahPesk) * 100).toFixed(2)
                    "
                  ></md-progress-bar>
                  <md-progress-bar
                    md-mode="determinate"
                    v-else
                    :md-value="0"
                  ></md-progress-bar>

                  <div class="row align-items-center mt-2">
                    <div class="col-md-6">
                      <span class="text-muted">Terkumpul</span>
                    </div>

                    <div class="col-md-6">
                      <h4 class="text-right mt-3" v-if="jumlahPesk.length > 0">
                        {{
                          Number(
                            (sumpesk(jumlahPesk) / wadahPesk) * 100
                          ).toFixed(2)
                        }}
                        %
                      </h4>
                      <h4 class="text-right mt-3" v-else>0 %</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-xl-3">
              <div class="card mb-1" id="card-persen">
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <div class="ml-0">
                      <div class="title-card-persen">Thermometer</div>
                      <div class="text-large">
                        <h3
                          class="mount-card-persen"
                          v-if="jumlahThermometer.length > 0"
                        >
                          {{ sumalkes(jumlahThermometer) }} /
                          {{ wadahThermometer }} PCS
                        </h3>
                        <h3 class="mount-card-persen" v-else>
                          0 / {{ wadahThermometer }} PCS
                        </h3>
                      </div>
                    </div>
                  </div>

                  <md-progress-bar
                    md-mode="determinate"
                    v-if="jumlahThermometer.length > 0"
                    :md-value="
                      Number(
                        (sumalkes(jumlahThermometer) / wadahThermometer) * 100
                      ).toFixed(2)
                    "
                  ></md-progress-bar>
                  <md-progress-bar
                    md-mode="determinate"
                    v-else
                    :md-value="0"
                  ></md-progress-bar>

                  <div class="row align-items-center mt-2">
                    <div class="col-md-6">
                      <span class="text-muted">Terkumpul</span>
                    </div>

                    <div class="col-md-6">
                      <h4
                        class="text-right mt-3"
                        v-if="jumlahThermometer.length > 0"
                      >
                        {{
                          Number(
                            (sumalkes(jumlahThermometer) / wadahThermometer) *
                              100
                          ).toFixed(2)
                        }}
                        %
                      </h4>
                      <h4 class="text-right mt-3" v-else>0 %</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-xl-3">
              <div class="card mb-1" id="card-persen">
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <div class="ml-0">
                      <div class="title-card-persen">Tensimeter</div>
                      <div class="text-large">
                        <h3
                          class="mount-card-persen"
                          v-if="jumlahTensimeter.length > 0"
                        >
                          {{ sumalkes(jumlahTensimeter) }} /
                          {{ wadahTensimeter }} PCS
                        </h3>
                        <h3 class="mount-card-persen" v-else>
                          0 / {{ wadahTensimeter }} PCS
                        </h3>
                      </div>
                    </div>
                  </div>

                  <md-progress-bar
                    v-if="jumlahTensimeter.length > 0"
                    md-mode="determinate"
                    :md-value="
                      Number(
                        (sumalkes(jumlahTensimeter) / wadahTensimeter) * 100
                      ).toFixed(2)
                    "
                  ></md-progress-bar>
                  <md-progress-bar
                    v-else
                    md-mode="determinate"
                    :md-value="0"
                  ></md-progress-bar>

                  <div class="row align-items-center mt-2">
                    <div class="col-md-6">
                      <span class="text-muted">Terkumpul</span>
                    </div>

                    <div class="col-md-6">
                      <h4
                        class="text-right mt-3"
                        v-if="jumlahTensimeter.length > 0"
                      >
                        {{
                          Number(
                            (sumalkes(jumlahTensimeter) / wadahTensimeter) * 100
                          ).toFixed(2)
                        }}
                        %
                      </h4>
                      <h4 class="text-right mt-3" v-else>0 %</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-xl-3">
              <div class="card mb-1" id="card-persen">
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <div class="ml-0">
                      <div class="title-card-persen">Dental Amalgam</div>
                      <div class="text-large">
                        <h3
                          class="mount-card-persen"
                          v-if="jumlahAmalgam.length > 0"
                        >
                          {{ sumalkes(jumlahAmalgam) }} / {{ wadahAmalgam }} PCS
                        </h3>
                        <h3 class="mount-card-persen" v-else>
                          0 / {{ wadahAmalgam }} PCS
                        </h3>
                      </div>
                    </div>
                  </div>

                  <md-progress-bar
                    v-if="jumlahAmalgam.length > 0"
                    md-mode="determinate"
                    :md-value="
                      Number(
                        (sumalkes(jumlahAmalgam) / wadahAmalgam) * 100
                      ).toFixed(2)
                    "
                  ></md-progress-bar>
                  <md-progress-bar
                    v-else
                    md-mode="determinate"
                    :md-value="0"
                  ></md-progress-bar>

                  <div class="row align-items-center mt-2">
                    <div class="col-md-6">
                      <span class="text-muted">Terkumpul</span>
                    </div>

                    <div class="col-md-6">
                      <h4
                        class="text-right mt-3"
                        v-if="jumlahAmalgam.length > 0"
                      >
                        {{
                          Number(
                            (sumalkes(jumlahAmalgam) / wadahAmalgam) * 100
                          ).toFixed(2)
                        }}
                        %
                      </h4>

                      <h4 class="text-right mt-3" v-else>0 %</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- <div class="row">
                <div class="col-12">
                    <div class="d-flex justify-content-end mb-4">
                        <div class="btn btn-primary purple" v-on:click="isNinja = !isNinja">Filter</div>
                    </div>
                </div>
            </div> -->

          <div class="box-filter">
            <form @submit.prevent="filterdata">
              <div class="row">
                <div class="col-md-10">
                  <h5>Filter Shipping</h5>
                </div>
                <div class="col-md-2">
                  <button class="ml-auto btn btn-primary purple" type="submit">
                    Filter Data
                  </button>
                </div>
              </div>

              <div class="row">
                <div class="col-md-4">
                  <div class="item-filter">
                    <h6>Sortir Merkuri</h6>
                    <b-check
                      v-on:change="changeFilter()"
                      v-model="sortir_merkuri"
                      value="0"
                      >Pesk</b-check
                    >
                    <b-check
                      v-on:change="changeFilter()"
                      v-model="sortir_merkuri"
                      value="1"
                      >Thermometer</b-check
                    >
                    <b-check
                      v-on:change="changeFilter()"
                      v-model="sortir_merkuri"
                      value="2"
                      >Tensimeter Meja</b-check
                    >
                    <b-check
                      v-on:change="changeFilter()"
                      v-model="sortir_merkuri"
                      value="3"
                      >Tensimeter Berdiri</b-check
                    >
                    <b-check
                      v-on:change="changeFilter()"
                      v-model="sortir_merkuri"
                      value="4"
                      >Dental Amalgam
                    </b-check>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="item-filter">
                    <h6>Sortir Gudang</h6>
                    <b-check
                      v-on:change="changeFilter()"
                      v-model="sortir_gudang"
                      value="0"
                      >Interim Kab / Kota</b-check
                    >
                    <b-check
                      v-on:change="changeFilter()"
                      v-model="sortir_gudang"
                      value="1"
                      >Interim Provinsi</b-check
                    >
                    <b-check
                      v-on:change="changeFilter()"
                      v-model="sortir_gudang"
                      value="2"
                      >Final</b-check
                    >
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="item-filter">
                    <h6>Sortir Status Shipping</h6>

                    <b-check
                      v-on:change="changeFilter()"
                      v-model="status_shipping"
                      value="2"
                      >Pending
                    </b-check>
                    <!-- status 2 -->

                    <b-check
                      v-on:change="changeFilter()"
                      v-model="status_shipping"
                      value="0"
                      >On Going
                    </b-check>
                    <!-- status 0 -->

                    <b-check
                      v-on:change="changeFilter()"
                      v-model="status_shipping"
                      value="1"
                      >Sukses
                    </b-check>
                    <!-- status 1 -->
                  </div>

                  <small class="text-muted"
                    >*Sortir Status Shipping untuk mengetahui Kondisi terbaru
                    penjemputan</small
                  >
                </div>
              </div>
            </form>
          </div>
          <div class="row">
            <div class="col-md-12">
              <gmap-map
                :center="center"
                :zoom="5"
                ref="mmm"
                style="width: 100%; height: 600px"
              >
                <gmap-info-window
                  :options="option"
                  :position="infoWindowPos"
                  :opened="infoWinOpen"
                  @closeclick="close"
                >
                </gmap-info-window>

                <div v-for="(value, key) in allData" v-bind:key="key">
                  <gmap-marker
                    v-if="!loading"
                    :position="{
                      lat: parseFloat(value.latitude),
                      lng: parseFloat(value.longitude),
                    }"
                    :draggable="false"
                    @click="toggleInfoWindow(value, key)"
                    :icon="
                      value.jenis == 0 && value.status_shipping == 0
                        ? peskbelum
                        : value.jenis == 0 && value.status_shipping == 1
                        ? pesksudah
                        : value.laporan == 'pesk'
                        ? peskpending
                        : value.jenis == 1 && value.status_shipping == 0
                        ? termometerbelum
                        : value.jenis == 1 && value.status_shipping == 1
                        ? termometersudah
                        : value.laporan == 'alkes' &&
                          value.akumulasi_termometer != '0'
                        ? termometerpending
                        : value.jenis == 2 && value.status_shipping == 0
                        ? tensimejabelum
                        : value.jenis == 2 && value.status_shipping == 1
                        ? tensimejasudah
                        : value.laporan == 'alkes' &&
                          value.akumulasi_tensimeter_meja != '0'
                        ? tensimejapending
                        : value.jenis == 3 && value.status_shipping == 0
                        ? tensidiribelum
                        : value.jenis == 3 && value.status_shipping == 1
                        ? tensidirisudah
                        : value.laporan == 'alkes' &&
                          value.akumulasi_tensimeter_berdiri != '0'
                        ? tensidiripending
                        : value.jenis == 4 && value.status_shipping == 0
                        ? amalgambelum
                        : value.jenis == 4 && value.status_shipping == 1
                        ? amalgamsudah
                        : value.laporan == 'alkes' &&
                          value.jml_merkuri_sisa_amalgam != '0'
                        ? amalgampending
                        : value.sifat == 0
                        ? storagekab
                        : value.sifat == 1
                        ? storageprov
                        : value.sifat == 2
                        ? storagefin
                        : transparent
                    "
                  >
                  </gmap-marker>
                </div>
              </gmap-map>
            </div>

            <div class="col-md-6">
              <b-card class="mb-4">
                <div class="title-heading text-center mb-4">
                  <h5>Gudang/Storage</h5>
                </div>
                <div class="row">
                  <div class="col-md-4 text-center">
                    <h2 class="text-data purple">{{ storage_kabupaten }}</h2>
                    <span class="text-muted">Kabupaten / Kota</span>
                  </div>
                  <div class="col-md-4 text-center">
                    <h2 class="text-data purple">{{ storage_provinsi }}</h2>
                    <span class="text-muted">Provinsi</span>
                  </div>
                  <div class="col-md-4 text-center">
                    <h2 class="text-data purple">{{ storage_final }}</h2>
                    <span class="text-muted">Final</span>
                  </div>
                </div>
              </b-card>
            </div>
            <div class="col-md-6">
              <b-card class="mb-4 text-center">
                <div class="title-heading mb-4">
                  <h5>Akumulasi Penjemputan</h5>
                </div>
                <h2 class="text-data purple">
                  {{
                    Number(
                      (jumlahPesk.length > 0
                        ? (sumpesk(jumlahPesk) / wadahPesk) * 100
                        : 0 + jumlahThermometer.length > 0
                        ? (sumalkes(jumlahThermometer) / wadahThermometer) * 100
                        : 0 + jumlahTensimeter.length > 0
                        ? (sumalkes(jumlahTensimeter) / wadahTensimeter) * 100
                        : 0 + jumlahAmalgam.length > 0
                        ? (sumalkes(jumlahAmalgam) / wadahAmalgam) * 100
                        : 0) / 4
                    ).toFixed(2)
                  }}
                  %
                </h2>
                <span class="text-muted"
                  >Data Statistik Tahun {{ moment().format("YYYY") }}</span
                >
              </b-card>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12 text-center">
              <h2>Infografis Penjemputan</h2>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <b-card class="mb-4">
                <div class="title-heading mb-4">
                  <h5>Pelaporan Borang Alkes</h5>
                </div>
                <LineChart v-if="loaded" :datachart="alkesdata" />
              </b-card>
            </div>
            <div class="col-md-6">
              <b-card class="mb-4">
                <div class="title-heading mb-4">
                  <h5>Pelaporan Borang Pesk</h5>
                </div>
                <LineChart v-if="loaded" :datachart="peskdata" />
              </b-card>
            </div>
          </div>

          <div class="row justify-content-between align-items-center">
            <div class="col-md-4">
              <div class="mb-5">
                <div class="title-heading mb-4">
                  <h5>Persentase Pelaporan Merkuri</h5>
                </div>
                <DoughnutChart
                  v-if="loaded"
                  :datachart="persentasepelaporandata"
                  :options="doughnutOptions"
                />
              </div>
            </div>

            <div class="col-md-7">
              <b-card class="mb-4">
                <div class="title-heading mb-4">
                  <h5>Kuantitas Merkuri Terlapor</h5>
                </div>
                <BarChart v-if="loaded" :datachart="kuantitasmerkuridata" />
              </b-card>
            </div>
          </div>

          <div class="row mt-5">
            <div class="col-md-12">
              <b-card class="card-tabel">
                <div class="title-heading mb-4">
                  <h5>Kuantitas Merkuri Terlapor</h5>

                  <p>Cari Berdasarkan Nama Storage</p>
                  <input
                    type="text"
                    class="form-control"
                    v-on:keyup="filter_storage"
                    v-model="nama_storage"
                  />
                </div>
                <div class="table-responsive">
                  <table class="table table-hover">
                    <thead class="bg-primary text-white purple">
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nama Storage</th>
                        <th scope="col">Tipe Storage</th>
                        <th scope="col">Jumlah Agent</th>
                        <th scope="col">Pesk Terkumpul / (Jumlah Pesk)</th>
                        <th scope="col">Alkes Terkumpul / (Jumlah Alkes)</th>
                        <th scope="col">Persentase</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, key) in storage" :key="key">
                        <th scope="row">{{ key + 1 }}</th>
                        <td>{{ item.nama_storage }}</td>
                        <td>
                          <span v-if="item.sifat == 0">Kabupaten / Kota</span>
                          <span v-else-if="item.sifat == 1">Provinsi</span>
                          <span v-else-if="item.sifat == 2">Final</span>
                        </td>
                        <td>
                          <span v-if="item.user_storage.length > 0">
                            {{ item.user_storage.length }}
                          </span>
                          <span v-else> Belum Ada Agent </span>
                        </td>
                        <td>
                          <span v-if="item.pesksumsudah != null">
                            {{ item.pesksumsudah }} / {{ item.pesksumall }} KG
                          </span>

                          <span v-else> Barang Kosong </span>
                        </td>
                        <td>
                          <span v-if="item.alkessumsudah != null">
                            {{ item.alkessumsudah }} / {{ item.alkessumall }} KG
                          </span>

                          <span v-else> Barang Kosong </span>
                        </td>
                        <td>{{ Number(item.persentaseall.toFixed(2)) }}%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </b-card>
            </div>
          </div>
        </div>
      </md-app-content>
    </md-app>
  </div>
</template>

<style lang="scss" scoped>
.md-app {
  max-height: 100%;
  border: 1px solid rgba(#000, 0.12);
}

// Demo purposes only
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}

#card-persen {
  border-radius: 10px;
  cursor: pointer;
}

#card-persen:hover {
  background: #f2f2f2;
}
.card-header {
  background: #448aff;
  color: white;
}
</style>

<script>
import DashboardService from "@/services/Dashboard/DashboardService";
import LineChart from "@/components/data/Line";
import DoughnutChart from "@/components/data/Doughnut";
import BarChart from "@/components/data/Bar";
import "@/style/css/main.css";

export default {
  name: "dashboard",
  metaInfo: {
    title: "Dashboard Monitoring System",
  },

  components: {
    LineChart,
    DoughnutChart,
    BarChart,
  },

  data: () => ({
    isNinja: false,
    menuVisible: false,
    elementVisible: true,

    center: [],
    allData: [],
    status_shipping: [],
    borang_alkes_laporkan: [],
    borang_alkes_belum_jemput: [],
    borang_alkes_sudah_jemput: [],
    borang_pesk_laporkan: [],
    borang_pesk_belum_jemput: [],
    borang_pesk_sudah_jemput: [],
    list_hari_alkes: [],
    sortir_merkuri: [],
    sortir_gudang: [],
    jumlahPesk: "",
    jumlahThermometer: "",
    jumlahTensimeter: "",
    jumlahAmalgam: "",
    wadahThermometer: "",
    wadahTensimeter: "",
    wadahAmalgam: "",
    wadahPesk: "",
    total_shipping_sudah: "",
    total_shipping: "",
    storage_kabupaten: "",
    storage_provinsi: "",
    storage: [],
    //grafik persentase
    persentase_alkes: "",
    persentase_pesk: "",

    //tabel storage
    termometer_baik: "",
    termometer_buruk: "",
    tensimeter_meja_baik: "",
    tensimeter_meja_buruk: "",
    tensimeter_berdiri_baik: "",
    tensimeter_berdiri_buruk: "",
    dental_amalgam_baik: "",
    pesk_baik: "",
    pesk_buruk: "",
    nama_storage: "",

    //grafik
    chartdata: [],
    kuantitasmerkuridata: [],
    alkesdata: [],
    peskdata: [],
    persentasepelaporandata: [],
    loaded: false,

    window_open: false,
    option: {
      pixelOffset: {
        width: 0,
        height: -50,
      },
      content: "",
    },
    infoContent: "",
    infoWindowPos: null,
    infoWinOpen: false,
    currentMidx: null,
    infoData: null,
    //end

    attrs: {
      class: "mb-6",
      boilerplate: true,
      elevation: 2,
    },
    peskpending: {
      url: require("@/assets/images/pin/pesk/pesk-pending.svg"),
      scaledSize: { width: 100, height: 50 },
    },

    peskbelum: {
      url: require("@/assets/images/pin/pesk/pesk-progress.svg"),
      scaledSize: { width: 100, height: 50 },
    },

    pesksudah: {
      url: require("@/assets/images/pin/pesk/pesk-success.svg"),
      scaledSize: { width: 100, height: 50 },
    },

    termometerpending: {
      url: require("@/assets/images/pin/Thermo/thermo-pending.svg"),
      scaledSize: { width: 100, height: 50 },
    },

    termometerbelum: {
      url: require("@/assets/images/pin/Thermo/thermo-progress.svg"),
      scaledSize: { width: 100, height: 50 },
    },

    termometersudah: {
      url: require("@/assets/images/pin/Thermo/thermo-success.svg"),
      scaledSize: { width: 100, height: 50 },
    },

    tensimejapending: {
      url: require("@/assets/images/pin/tensi/tensi-pending.svg"),
      scaledSize: { width: 100, height: 50 },
    },

    tensimejabelum: {
      url: require("@/assets/images/pin/tensi/tensi-progress.svg"),
      scaledSize: { width: 100, height: 50 },
    },
    tensimejasudah: {
      url: require("@/assets/images/pin/tensi/tensi-success.svg"),
      scaledSize: { width: 100, height: 50 },
    },

    tensidiripending: {
      url: require("@/assets/images/pin/tensi/tensi-pending.svg"),
      scaledSize: { width: 100, height: 50 },
    },
    tensidiribelum: {
      url: require("@/assets/images/pin/tensi/tensi-progress.svg"),
      scaledSize: { width: 100, height: 50 },
    },
    tensidirisudah: {
      url: require("@/assets/images/pin/tensi/tensi-success.svg"),
      scaledSize: { width: 100, height: 50 },
    },
    amalgampending: {
      url: require("@/assets/images/pin/dental/dental-pending.svg"),
      scaledSize: { width: 100, height: 50 },
    },
    amalgambelum: {
      url: require("@/assets/images/pin/dental/dental-progress.svg"),
      scaledSize: { width: 100, height: 50 },
    },
    amalgamsudah: {
      url: require("@/assets/images/pin/dental/dental-success.svg"),
      scaledSize: { width: 100, height: 50 },
    },
    storagekab: {
      url: require("@/assets/images/pin/storage/storage-kab.svg"),
      scaledSize: { width: 100, height: 50 },
    },
    storageprov: {
      url: require("@/assets/images/pin/storage/storage-prov.svg"),
      scaledSize: { width: 100, height: 50 },
    },
    storagefin: {
      url: require("@/assets/images/pin/storage/storage-fin.svg"),
      scaledSize: { width: 100, height: 50 },
    },
    transparent: {
      url: require("@/assets/images/pin/transparent.png"),
      scaledSize: { width: 1, height: 1 },
    },

    loading: false,
  }),

  methods: {
    toggleInfoWindow: function (marker, idx) {
      const infomarker = {
        lat: parseFloat(marker.latitude),
        lng: parseFloat(marker.longitude),
      };
      this.infoWindowPos = infomarker;
      this.option.content = marker.address;

      //check if its the same marker that was selected if yes toggle
      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
      }

      //if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    },
    close() {
      this.infoWinOpen = false;
    },

    resetdata() {
      window.location.reload();
    },

    changeFilter() {
      this.loading = true;
      this.getDashboard();
    },

    getDashboard() {
      DashboardService.getDashboardAll()
        .then((response) => {
          this.center = {
            lat: parseFloat(-6.2),
            lng: parseFloat(106.816666),
          };
          this.allData = response.data.all_data;
          this.jumlahPesk = response.data.jumlah_pesk;
          this.jumlahThermometer = response.data.jumlah_thermometer;
          this.jumlahTensimeter = response.data.jumlah_tensimeter;
          this.jumlahAmalgam = response.data.jumlah_amalgam;
          this.wadahPesk = response.data.wadah_pesk;
          this.wadahThermometer = response.data.wadah_thermometer;
          this.wadahTensimeter = response.data.wadah_tensimeter;
          this.wadahAmalgam = response.data.wadah_amalgam;
          this.total_shipping_sudah = response.data.total_shipping_sudah;
          this.total_shipping = response.data.total_shipping;
          this.storage_kabupaten = response.data.storage_kabupaten;
          this.storage_provinsi = response.data.storage_provinsi;
          this.storage_final = response.data.storage_final;
          this.periode = response.data.periode;
          this.borang_alkes_laporkan = response.data.borang_alkes_laporkan;
          this.borang_alkes_belum_jemput =
            response.data.borang_alkes_belum_jemput;
          this.borang_alkes_sudah_jemput =
            response.data.borang_alkes_sudah_jemput;
          this.borang_pesk_laporkan = response.data.borang_pesk_laporkan;
          this.borang_pesk_belum_jemput =
            response.data.borang_pesk_belum_jemput;
          this.borang_pesk_sudah_jemput =
            response.data.borang_pesk_sudah_jemput;
          this.list_hari_alkes = response.data.list_hari_alkes;
          this.persentase_alkes = response.data.persentase_alkes;
          this.persentase_pesk = response.data.persentase_pesk;
          this.storage = response.data.storage;
          this.termometer_baik = response.data.termometer_baik;
          this.termometer_buruk = response.data.termometer_buruk;
          this.tensimeter_meja_baik = response.data.tensimeter_meja_baik;
          this.tensimeter_meja_buruk = response.data.tensimeter_meja_buruk;
          this.tensimeter_berdiri_baik = response.data.tensimeter_berdiri_baik;
          this.tensimeter_berdiri_buruk =
            response.data.tensimeter_berdiri_buruk;
          this.dental_amalgam_baik = response.data.dental_amalgam_baik;
          this.pesk_baik = response.data.pesk_baik;
          this.pesk_buruk = response.data.pesk_buruk;

          this.alkesborangdata();
          this.peskborangdata();
          this.persentaseborangdata();
          this.kuantitasmerkuri();
          this.loading = false;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    // VUE CHART
    alkesborangdata() {
      this.alkesdata = {
        labels: this.list_hari_alkes,
        datasets: [
          {
            label: "Dilaporkan",
            backgroundColor: ["rgba(240, 58, 88,0.4)"],
            borderColor: ["rgba(192, 57, 43,1.0)"],
            data: this.borang_alkes_laporkan,
          },
          {
            label: "Menunggu di Jemput",
            backgroundColor: ["rgba(0,216,255,0.4)"],
            borderColor: ["rgba(52, 152, 219,1.0)"],
            data: this.borang_alkes_belum_jemput,
          },
          {
            label: "Telah di jemput",
            backgroundColor: ["rgba(198,181,186,0.4)"],
            borderColor: ["rgba(142, 68, 173,1.0)"],
            data: this.borang_alkes_sudah_jemput,
          },
        ],
      };
      this.loaded = true;
    },

    peskborangdata() {
      (this.doughnutOptions = {
        hoverBorderWidth: 20,
      }),
        (this.persentasepelaporandata = {
          hoverBackgroundColor: "red",
          hoverBorderWidth: 10,
          labels: ["Pelaporan Alkes", "Pelaporan PESK"],
          datasets: [
            {
              label: "Data One",
              backgroundColor: ["#FF6384", "#FF9F40"],
              data: [this.persentase_alkes, this.persentase_pesk],
            },
          ],
        });
      this.loaded = true;
    },

    persentaseborangdata() {
      this.peskdata = {
        labels: this.list_hari_alkes,
        datasets: [
          {
            label: "Dilaporkan",
            backgroundColor: ["rgba(240, 58, 88,0.4)"],
            borderColor: ["rgba(192, 57, 43,1.0)"],
            data: this.borang_pesk_laporkan,
          },
          {
            label: "Menunggu di Jemput",
            backgroundColor: ["rgba(0,216,255,0.4)"],
            borderColor: ["rgba(52, 152, 219,1.0)"],
            data: this.borang_pesk_belum_jemput,
          },
          {
            label: "Telah di jemput",
            backgroundColor: ["rgba(198,181,186,0.4)"],
            borderColor: ["rgba(142, 68, 173,1.0)"],
            data: this.borang_pesk_sudah_jemput,
          },
        ],
      };
      this.loaded = true;
    },

    kuantitasmerkuri() {
      this.kuantitasmerkuridata = {
        labels: [
          "PESK",
          "Thermometer",
          "Tensimeter Meja",
          "Tensimeter Berdiri",
          "Dental Amalgam",
        ],
        datasets: [
          {
            label: "Baik",
            backgroundColor: "#33CC33",
            data: [
              this.pesk_baik,
              this.termometer_baik,
              this.tensimeter_meja_baik,
              this.tensimeter_berdiri_baik,
              this.dental_amalgam_baik,
            ],
          },
          {
            label: "Buruk",
            backgroundColor: "#666666",
            data: [
              this.pesk_buruk,
              this.termometer_buruk,
              this.tensimeter_meja_buruk,
              this.tensimeter_berdiri_buruk,
            ],
          },
        ],
      };
      this.loaded = true;
    },

    sumpesk(alldata) {
      let total = [];
      Object.entries(alldata).forEach(([key, val]) => {
        console.log(key);
        Object.entries(val.data_shipping_secondary.barang).forEach(
          ([key, val1]) => {
            console.log(key);
            total.push(val1); // the value of the current key.
          }
        );
      });
      return total.reduce(function (total, num) {
        return parseInt(total) + parseInt(num);
      });
    },

    sumalkes(alldata) {
      let total = [];
      Object.entries(alldata).forEach(([key, val]) => {
        console.log(key);
        total.push(val.data_shipping_secondary_alkes.jml_barang);
      });
      return total.reduce(function (total, num) {
        return parseInt(total) + parseInt(num);
      });
    },

    // sumpeskstorage(alldata){
    //     let total = [];
    //     Object.entries(alldata).forEach(([keys, value]) => {
    //         console.log(keys);
    //         if(value.data_shipping_secondary.length > 0){
    //             Object.entries(value.data_shipping_secondary).forEach(([keys1, value1]) => {
    //                 console.log(keys1);
    //                     Object.entries(value1.barang).forEach(([keys2, value2]) => {
    //                        console.log(keys2);
    //                     total.push(value2) // the value of the current key.
    //                 });

    //             });
    //         }

    //     });
    //     return total.reduce(function(total, num){ return parseInt(total) + parseInt(num) });
    // },

    sumalkesstorage(alldata) {
      let total = [];
      Object.entries(alldata).forEach(([key, val]) => {
        console.log(key);
        Object.entries(val.data_shipping_secondary).forEach(([keys, vals]) => {
          console.log(keys);

          total.push(vals.jml_barang);
        });
      });
      return total.reduce(function (total, num) {
        return parseInt(total) + parseInt(num);
      });
    },

    sortirMerkuri() {
      let Data = {
        data: this.sortir_merkuri,
      };

      DashboardService.sortirMerkuri(Data)
        .then((response) => {
          this.allData = response.data.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    sortirGudang() {
      let Data = {
        data: this.sortir_gudang,
      };

      DashboardService.sortirGudang(Data)
        .then((response) => {
          this.allData = response.data.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    sortirStatus(value) {
      let Data = {
        data: value,
      };

      DashboardService.sortirStatus(Data)
        .then((response) => {
          this.allData = response.data.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    filterdata() {
      let Data = {
        merkuri: this.sortir_merkuri,
        gudang: this.sortir_gudang,
        status: this.status_shipping,
      };

      DashboardService.filterdata(Data)
        .then((response) => {
          this.allData = response.data.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    filter_storage: function () {
      let formData = {
        nama_storage: this.nama_storage,
      };

      DashboardService.filter_storage(formData)
        .then((response) => {
          this.storage = response.data.data;
        })

        .catch((e) => {
          console.log(e);
        });
    },
  },

  created() {
    // setTimeout(() => this.elementVisible = false, 3000);

    this.getDashboard();
  },
};
</script>