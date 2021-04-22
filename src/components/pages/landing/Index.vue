<template>
    <div class="page-container custom">
   
    <md-app md-waterfall md-mode="overlap">

    <md-app-toolbar class="md-primary md-large align-items-start">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="md-toolbar-row flex-column align-items-start">
                        <span class="md-title ml-0 bold">Dashboard Monitoring System </span>
                        <h5>Tanggal : {{ moment().format("Do MMMM YYYY") }} </h5>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="d-flex justify-content-end">
                        <button class="ml-auto btn btn-primary purple"  @click="resetdata()">
                            Reset Data 
                            <md-icon>refresh</md-icon>
                        </button>

                    </div>
                </div>
              </div>
          </div>
      </md-app-toolbar>
      <md-app-content >
        <div class="container" >
            <div class="row">
               
                <div class="col-sm-6 col-xl-4" v-if="jumlahPesk.length > 0"> 

                    <div class="card mb-1" id="card-persen">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="ml-3">
                                    <div class="title-card-persen">PESK</div>
                                    <div class="text-large">
                                    
                                    <h3>{{ sumpesk(jumlahPesk) }} / {{ wadahPesk }} KG</h3>   
                                    
                                    </div>
                                </div>
                            
                            </div>
                            
                            <md-progress-bar md-mode="determinate" :md-value="Number(( sumpesk(jumlahPesk) / wadahPesk ) * 100).toFixed(0)"></md-progress-bar>

                            <div class="row mt-2">
                                
                                <div class="col-md-6">
                                    Terkumpul
                                </div>

                                <div class="col-md-6">
                                     <h3 class="text-right">
                                        {{ Number(( sumpesk(jumlahPesk) / wadahPesk ) * 100).toFixed(0) }} %
                                    </h3>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>


                <div class="col-sm-6 col-xl-4" > 
                    <div class="card mb-1" id="card-persen">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="ml-0">
                                    <div class="title-card-persen">Thermometer</div>
                                    <div class="text-large">
                                    
                                    <h3 class="mount-card-persen" v-if="jumlahThermometer.length > 0">{{ sumalkes(jumlahThermometer) }} / {{ wadahThermometer }} KG</h3>   
                                    <h3 class="mount-card-persen" v-else>0 / {{ wadahThermometer }} KG</h3>   
                                    
                                    </div>
                                </div>
                            
                            </div>
                            
                            <md-progress-bar md-mode="determinate" v-if="jumlahThermometer.length > 0" :md-value="Number(( sumalkes(jumlahThermometer) / wadahThermometer ) * 100).toFixed(0)"></md-progress-bar>
                            <md-progress-bar md-mode="determinate" v-else :md-value="0"></md-progress-bar>

                            <div class="row align-items-center mt-2">
                                
                                <div class="col-md-6">
                                    <span class="text-muted">Terkumpul</span>
                                </div>

                                <div class="col-md-6">
                                     <h3 class="text-right" v-if="jumlahThermometer.length > 0">
                                        {{ Number(( sumalkes(jumlahThermometer) / wadahThermometer ) * 100).toFixed(0) }} %
                                    </h3>
                                    <h3 class="text-right" v-else>
                                        0 %
                                    </h3>
                                </div>

                            </div>
                            
                            
                            
                        </div>
                    </div>

                 

                </div>


                <div class="col-sm-6 col-xl-4" > 

        
                    <div class="card mb-1" id="card-persen">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="ml-0">
                                    <div class="title-card-persen">Tensimeter</div>
                                    <div class="text-large">
                                    
                                    <h3 class="mount-card-persen" v-if="jumlahTensimeter.length > 0">{{ sumalkes(jumlahTensimeter) }} / {{ wadahTensimeter }} KG</h3>   
                                    <h3 class="mount-card-persen" v-else> 0 / {{ wadahTensimeter }} KG</h3>   
                                    
                                    </div>
                                </div>
                            
                            </div>
                            
                            <md-progress-bar v-if="jumlahTensimeter.length > 0" md-mode="determinate" :md-value="Number(( sumalkes(jumlahTensimeter) / wadahTensimeter ) * 100).toFixed(0)"></md-progress-bar>
                            <md-progress-bar v-else md-mode="determinate" :md-value="0"></md-progress-bar>

                            <div class="row align-items-center mt-2">
                                
                                <div class="col-md-6">
                                    <span class="text-muted">Terkumpul</span>
                                </div>

                                <div class="col-md-6">
                                    <h3 class="text-right" v-if="jumlahTensimeter.length > 0">
                                        {{ Number(( sumalkes(jumlahTensimeter) / wadahTensimeter ) * 100).toFixed(0) }} %
                                    </h3>
                                    <h3 class="text-right" v-else>
                                    0 %
                                    </h3>
                                </div>

                            </div> 
                            
                            
                            
                        </div>
                    </div>

                </div>


                <div class="col-sm-6 col-xl-4" > 

                    <div class="card mb-1" id="card-persen">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="ml-0">
                                    <div class="title-card-persen">Dental Amalgam</div>
                                    <div class="text-large">
                                    
                                    <h3 class="mount-card-persen" v-if="jumlahAmalgam.length > 0">{{ sumalkes(jumlahAmalgam) }} / {{ wadahAmalgam }} KG</h3>   
                                    <h3 class="mount-card-persen" v-else> 0 / {{ wadahAmalgam }} KG</h3>   
                                    
                                    </div>
                                </div>
                            
                            </div>
                            
                            <md-progress-bar v-if="jumlahAmalgam.length > 0" md-mode="determinate" :md-value="Number(( sumalkes(jumlahAmalgam) / wadahAmalgam ) * 100).toFixed(0)"></md-progress-bar>
                            <md-progress-bar v-else md-mode="determinate" :md-value="0"></md-progress-bar>

                            <div class="row align-items-center mt-2">
                                
                                <div class="col-md-6">
                                    <span class="text-muted">Terkumpul</span>
                                </div>

                                <div class="col-md-6">
                                    <h3 class="text-right" v-if="jumlahAmalgam.length > 0">
                                        {{ Number(( sumalkes(jumlahAmalgam) / wadahAmalgam ) * 100).toFixed(0) }} %
                                    </h3>

                                    <h3 class="text-right" v-else>
                                        0 %
                                    </h3>
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
                <div class="title-heading">
                    <h5>Filter Shipping</h5>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="item-filter">
                            <h6>Sortir Merkuri</h6>
                            <b-check v-model="sortir_merkuri" value="0" @change="sortirMerkuri()">Pesk</b-check>
                            <b-check v-model="sortir_merkuri" value="1" @change="sortirMerkuri()">Thermometer</b-check>
                            <b-check v-model="sortir_merkuri" value="2" @change="sortirMerkuri()">Tensimeter Meja</b-check>
                            <b-check v-model="sortir_merkuri" value="3" @change="sortirMerkuri()">Tensimeter Berdiri</b-check>
                            <b-check v-model="sortir_merkuri" value="4" @change="sortirMerkuri()">Dental Amalgam </b-check>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="item-filter">
                            <h6>Sortir Gudang</h6>
                            <b-check v-model="sortir_gudang" value="0" @change="sortirGudang()">Interim Kab / Kota</b-check>
                            <b-check v-model="sortir_gudang" value="1" @change="sortirGudang()">Interim Provinsi</b-check>
                            <b-check v-model="sortir_gudang" value="2" @change="sortirGudang()">Interim Final</b-check>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="item-filter">
                            <h6>Sortir Status Shipping</h6>
                            <div class="item-shipping-filter pending">
                                <toggle-button :value="false"  color="#fcc938" :labels="true" @change="sortirStatus(2)"/>
                                <span>Pending</span>
                            </div>
                            <div class="item-shipping-filter on-going">
                                <toggle-button :value="false"  color="#00b0ff" :labels="true" @change="sortirStatus(0)"/>
                                <span>On Going</span>
                            </div>
                            <div class="item-shipping-filter success">
                                <toggle-button :value="false"  color="#00C853" :labels="true" @change="sortirStatus(1)"/>
                                <span>Sukses</span>
                            </div>
                        </div>
                        

                        <small class="text-muted">*Sortir Status Shipping untuk mengetahui Kondisi terbaru penjemputan</small>
                    </div>
                </div>
                

            </div>
            <div class="row">
                <div class="col-md-12">
                    <gmap-map :center="center" :zoom="7" ref="mmm" style="width: 100%; height:600px">
                        <div  v-for="(value, key) in allData" v-bind:key="key">
                            <gmap-marker 
                            :position="{ lat:  parseFloat(value.lokasi_awal.latitude) ,lng: parseFloat(value.lokasi_awal.longitude) }" 
                            :clickable="true" 
                            :draggable="false"
                            @click="center=value.position" ></gmap-marker>
                        </div>
                    </gmap-map>
                </div>
                <div class="col-md-12">
                    <div class="box-filter">
                        <div class="title-heading">
                            <h5>Legend</h5>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="list-legend">
                                    <h6>Legend Warna</h6>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="item-legend">
                                                <span class="color-legend pending">
                                                </span>
                                                <span class="desc-legend">
                                                    Pending
                                                </span>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="item-legend">
                                                <span class="color-legend on-going">
                                                </span>
                                                <span class="desc-legend">
                                                    On Going
                                                </span>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="item-legend">
                                                <span class="color-legend success">
                                                </span>
                                                <span class="desc-legend">
                                                    Sukses
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="list-legend">
                                    <h6>Legend Warna Storage</h6>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="item-legend">
                                                <span class="color-legend kabupaten">
                                                </span>
                                                <span class="desc-legend">
                                                    Kabupaten
                                                </span>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="item-legend">
                                                <span class="color-legend provinsi">
                                                </span>
                                                <span class="desc-legend">
                                                    Provinsi
                                                </span>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="item-legend">
                                                <span class="color-legend final">
                                                </span>
                                                <span class="desc-legend">
                                                    Final
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="list-legend">
                                    <h6>Legend Icon</h6>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="item-legend">
                                                <span class="color-legend kabupaten">
                                                </span>
                                                <span class="desc-legend">
                                                    Kabupaten
                                                </span>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <b-card class="mb-4">
                        <div class="title-heading text-center mb-4">
                            <h5>Gudang/Storage</h5>
                        </div>
                        <div class="row">
                            <div class="col-md-6 text-center">
                                <h2 class="text-data purple">{{ storage_kabupaten }}</h2>
                                <span class="text-muted">Kabupaten / Kota</span>
                                
                            </div>
                            <div class="col-md-6 text-center">
                                <h2 class="text-data purple">{{ storage_provinsi }}</h2>
                                <span class="text-muted">Provinsi</span>
                            </div>
                        </div>
                    </b-card>
                </div>
                <div class="col-md-6">
                    <b-card class="mb-4  text-center">
                        <div class="title-heading mb-4">
                            <h5>Gudang/Storage</h5>
                        </div>
                        <h2 class="text-data purple">{{ Number(( total_shipping_sudah / total_shipping ) * 100).toFixed(1) }} % </h2>
                        <span class="text-muted">Data Statistik Tahun {{  moment().format('YYYY') }}</span>
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
                            <h5>Infografis Penjemputan</h5>
                        </div>
                        <LineChart v-if="loaded" :datachart="alkesdata"/>
                    </b-card>
                </div>
                <div class="col-md-6">
                    <b-card class="mb-4">
                        <div class="title-heading mb-4">
                            <h5>Pelaporan Borang Pesk</h5>
                        </div>
                        <LineChart v-if="loaded" :datachart="peskdata"/>
                    </b-card>
                </div>

            </div>    

            <div class="row justify-content-between align-items-center">
                <div class="col-md-4">
                    <div class="mb-5">
                        <div class="title-heading mb-4">
                            <h5>Persentase Pelaporan Merkuri</h5>
                        </div>
                         <DoughnutChart v-if="loaded" :datachart="persentasepelaporandata" :options="doughnutOptions"/>
                    </div>
                </div>

                <div class="col-md-7">
                    <b-card class="mb-4">
                        <div class="title-heading mb-4">
                            <h5>Kuantitas Merkuri Terlapor</h5>
                        </div>
                        <BarChart v-if="loaded" :datachart="kuantitasmerkuridata"/>
                    </b-card>
                </div>

            </div>

            <div class="row mt-5">
                <div class="col-md-12">
                    <b-card class="card-tabel">
                        <div class="title-heading mb-4">
                            <h5>Kuantitas Merkuri Terlapor</h5>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-hover ">
                                <thead class="bg-primary text-white purple">
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nama Storage</th>
                                    <th scope="col">Tipe Storage</th>
                                    <th scope="col">Jumlah Agent</th>
                                    <th scope="col">Pesk Terkumpul</th>
                                    <th scope="col">Alkes Terkumpul</th>
                                    <th scope="col">Persentase</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item,key) in storage" :key="key">
                                        <th scope="row">{{ key + 1}}</th>
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
                                            <span v-else>
                                                Belum Ada Agent
                                            </span>
                                        </td>
                                        <td>
                                        
                                            <span v-if="item.pesksumsudah != null">
                                                {{ item.pesksumsudah }}
                                            </span>

                                            <span v-else>
                                                Barang Kosong
                                            </span>
                                        </td>
                                        <td>
                                            <span v-if="item.alkessumsudah != null">
                                                {{ item.alkessumsudah }}
                                            </span>

                                            <span v-else>
                                                Barang Kosong
                                            </span>
                                            
                                            
                                        </td>
                                        <td>
                                        {{ Number(item.persentaseall.toFixed(0)) }}%
                                            

                                        </td>
                                    </tr>
                                
                                </tbody>
                            </table>
                        </div>
                    </b-card>
                   


                </div>

            </div>
        </div>

         <!-- <v-skeleton-loader
          v-show="elementVisible"
          v-bind="attrs"
          type="card-avatar, article, actions"
        ></v-skeleton-loader> -->
      </md-app-content>
    </md-app>
  </div>

    
   
    
</template>

<style lang="scss" scoped>
  .md-app {
    max-height: 100%;
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }

  #card-persen{
      border-radius: 10px;  
      cursor: pointer;
  }

  #card-persen:hover{
      background: #F2F2F2;
  }
  .card-header {
      background: #448AFF;
      color: white;

  }

</style>

<script>
import DashboardService from '@/services/Dashboard/DashboardService'
import LineChart from "@/components/data/Line"
import DoughnutChart from "@/components/data/Doughnut"
import BarChart from "@/components/data/Bar"
import '@/style/css/main.css'

export default {
  name: 'dashboard',
  metaInfo: {
    title: 'Dashboard Monitoring System',
  },

  components: {
    LineChart,
    DoughnutChart,
    BarChart
  },


  data: () => ({
       isNinja: false,
        menuVisible                 : false,
        elementVisible              : true,

        center                      : [],
        allData                     : [],
        borang_alkes_laporkan       : [],
        borang_alkes_belum_jemput   : [],
        borang_alkes_sudah_jemput   : [],
        borang_pesk_laporkan        : [],
        borang_pesk_belum_jemput    : [],
        borang_pesk_sudah_jemput    : [],
        list_hari_alkes             : [],
        sortir_merkuri              : [],
        sortir_gudang               : [],
        jumlahPesk                  : '',
        jumlahThermometer           : "",
        jumlahTensimeter            : "",
        jumlahAmalgam               : "",
        wadahThermometer            : "",
        wadahTensimeter             : "",
        wadahAmalgam                : "",
        wadahPesk                   : '',
        total_shipping_sudah        : '',
        total_shipping              : '',
        storage_kabupaten           : '',
        storage_provinsi            : '',
        storage                     : [],
        //grafik persentase
        persentase_alkes            : '',
        persentase_pesk             : '',

        //tabel storage
        termometer_baik             : '',
        termometer_buruk            : '',
        tensimeter_meja_baik        : '',
        tensimeter_meja_buruk       : '',
        tensimeter_berdiri_baik     : '',
        tensimeter_berdiri_buruk    : '',
        dental_amalgam_baik         : '',
        pesk_baik                   : '',
        pesk_buruk                  : '',



        //grafik
        chartdata                   : [],
        kuantitasmerkuridata        : [],
        alkesdata                   : [],
        peskdata                    : [],
        persentasepelaporandata     : [],
        loaded                      : false,

        attrs: {
            class: 'mb-6',
            boilerplate: true,
            elevation: 2,
      },



  }),


  methods : {
    resetdata(){
        window.location.reload()
    },
    
    getDashboard(){
          DashboardService.getDashboardAll()
          .then(response => {
              this.center                       = {
                                                    lat : parseFloat(-6.200000),
                                                    lng : parseFloat(106.816666),
                                                }
              this.allData                      = response.data.all_data;
              this.jumlahPesk                   = response.data.jumlah_pesk;
              this.jumlahThermometer            = response.data.jumlah_thermometer;
              this.jumlahTensimeter             = response.data.jumlah_tensimeter;
              this.jumlahAmalgam                = response.data.jumlah_amalgam;
              this.wadahPesk                    = response.data.wadah_pesk;
              this.wadahThermometer             = response.data.wadah_thermometer;
              this.wadahTensimeter              = response.data.wadah_tensimeter;
              this.wadahAmalgam                 = response.data.wadah_amalgam;
              this.total_shipping_sudah         = response.data.total_shipping_sudah;
              this.total_shipping               = response.data.total_shipping;
              this.storage_kabupaten            = response.data.storage_kabupaten;
              this.storage_provinsi             = response.data.storage_provinsi;
              this.periode                      = response.data.periode;
              this.borang_alkes_laporkan        = response.data.borang_alkes_laporkan;
              this.borang_alkes_belum_jemput    = response.data.borang_alkes_belum_jemput;
              this.borang_alkes_sudah_jemput    = response.data.borang_alkes_sudah_jemput;
              this.borang_pesk_laporkan         = response.data.borang_pesk_laporkan;
              this.borang_pesk_belum_jemput     = response.data.borang_pesk_belum_jemput;
              this.borang_pesk_sudah_jemput     = response.data.borang_pesk_sudah_jemput;
              this.list_hari_alkes              = response.data.list_hari_alkes;
              this.persentase_alkes             = response.data.persentase_alkes;
              this.persentase_pesk              = response.data.persentase_pesk;
              this.storage                      = response.data.storage;
              this.termometer_baik              = response.data.termometer_baik;
              this.termometer_buruk             = response.data.termometer_buruk;
              this.tensimeter_meja_baik         = response.data.tensimeter_meja_baik;
              this.tensimeter_meja_buruk        = response.data.tensimeter_meja_buruk;
              this.tensimeter_berdiri_baik      = response.data.tensimeter_berdiri_baik;
              this.tensimeter_berdiri_buruk     = response.data.tensimeter_berdiri_buruk;
              this.dental_amalgam_baik          = response.data.dental_amalgam_baik;
              this.pesk_baik                    = response.data.pesk_baik;
              this.pesk_buruk                   = response.data.pesk_buruk;
            

              this.alkesborangdata();
              this.peskborangdata();
              this.persentaseborangdata();
              this.kuantitasmerkuri();
              

          })
          .catch(e => {
              console.log(e);
          });
    },

    // VUE CHART
     alkesborangdata(){
      this.alkesdata = {
        labels: this.list_hari_alkes,
        datasets: [
        {
          label: 'Dilaporkan',
          backgroundColor: [
            'rgba(240, 58, 88,0.4)',
          ],
          borderColor: [
            'rgba(192, 57, 43,1.0)',
          ],
          data: this.borang_alkes_laporkan
        },
        {
          label: 'Menunggu di Jemput',
            backgroundColor: [
                'rgba(0,216,255,0.4)',
            ],
            borderColor: [
                'rgba(52, 152, 219,1.0)',
            ],
          data: this.borang_alkes_belum_jemput
        },
        {
            label: 'Telah di jemput',
            backgroundColor: [
            'rgba(198,181,186,0.4)',
            ],
            borderColor: [
            'rgba(142, 68, 173,1.0)',
            ],
            data: this.borang_alkes_sudah_jemput
        },
      ]
      }
      this.loaded = true
     },

      peskborangdata(){
      this.doughnutOptions = {
        hoverBorderWidth: 20
      },
      this.persentasepelaporandata = {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: ["Pelaporan Alkes", "Pelaporan PESK"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#FF6384", "#FF9F40"],
            data: [this.persentase_alkes, this.persentase_pesk]
          }
        ]
      }
      this.loaded = true
     },

     persentaseborangdata(){
      this.peskdata = {
        labels: this.list_hari_alkes,
        datasets: [
        {
          label: 'Dilaporkan',
          backgroundColor: [
            'rgba(240, 58, 88,0.4)',
          ],
          borderColor: [
            'rgba(192, 57, 43,1.0)',
          ],
          data: this.borang_pesk_laporkan
        },
        {
          label: 'Menunggu di Jemput',
          backgroundColor: [
                'rgba(0,216,255,0.4)',
            ],
            borderColor: [
                'rgba(52, 152, 219,1.0)',
            ],
          data: this.borang_pesk_belum_jemput
        },
        {
          label: 'Telah di jemput',
          backgroundColor: [
            'rgba(198,181,186,0.4)',
            ],
            borderColor: [
            'rgba(142, 68, 173,1.0)',
            ],
          data: this.borang_pesk_sudah_jemput
        },
      ]
      }
      this.loaded = true
     },

     kuantitasmerkuri(){
        this.kuantitasmerkuridata = {
            labels: ["PESK", "Thermometer","Tensimeter Meja","Tensimeter Berdiri","Dental Amalgam"],
            datasets: [
            {
                label: 'Baik',
                backgroundColor: '#33CC33',
                data: [this.pesk_baik,this.termometer_baik,this.tensimeter_meja_baik,this.tensimeter_berdiri_baik,this.dental_amalgam_baik]
            },
            {
                label: 'Buruk',
                backgroundColor: '#666666',
                data: [this.pesk_buruk,this.termometer_buruk,this.tensimeter_meja_buruk,this.tensimeter_berdiri_buruk]
            },
        ]
      }
      this.loaded = true
     },

    

    sumpesk(alldata){
        let total = [];
        Object.entries(alldata).forEach(([key, val]) => {
            console.log(key);
            Object.entries(val.data_shipping_secondary.barang).forEach(([key, val1]) => {
                console.log(key);
                total.push(val1) // the value of the current key.
          });
        });
        return total.reduce(function(total, num){ return parseInt(total) + parseInt(num) });

    },

    sumalkes(alldata){
      let total = [];
        Object.entries(alldata).forEach(([key, val]) => {
            console.log(key);
            total.push(val.data_shipping_secondary_alkes.jml_barang) 
        });
        return total.reduce(function(total, num){ return parseInt(total) + parseInt(num) });
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

    sumalkesstorage(alldata){
        let total = [];
        Object.entries(alldata).forEach(([key, val]) => {
            console.log(key);
             Object.entries(val.data_shipping_secondary).forEach(([keys, vals]) => {
                console.log(keys);
            
                total.push(vals.jml_barang) 
            });
        });
        return total.reduce(function(total, num){ return parseInt(total) + parseInt(num) });
    },
    
    


    sortirMerkuri(){

      
      let Data = {
        data   : this.sortir_merkuri,
      };


      DashboardService.sortirMerkuri(Data)
        .then(response => {
          this.allData      = response.data.data;

        })
        .catch(e => {
          console.log(e);
        });


    },

    sortirGudang(){
       let Data = {
        data   : this.sortir_gudang,
      };      

      DashboardService.sortirGudang(Data)
        .then(response => {
          this.allData      = response.data.data;

        })
        .catch(e => {
          console.log(e);
        });
    },

    sortirStatus(value){

        let Data = {
        data   : value,
      };
      

      DashboardService.sortirStatus(Data)
        .then(response => {
          this.allData      = response.data.data;

        })
        .catch(e => {
          console.log(e);
        });
    },

    

  },

  created(){
    // setTimeout(() => this.elementVisible = false, 3000);

    this.getDashboard();   
        
  },

}

</script>