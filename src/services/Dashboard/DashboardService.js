import http from '@/http-common';

class DashboardService{

    getDashboardAll() { 
        return http.get(`dashboard/getDashboardAll`);
    }
    sortirMerkuri(data){
        return http.post('/dashboard/sortir/merkuri/all',data);
    }
    sortirGudang(data){
        return http.post('/dashboard/sortir/gudang/all',data);
    }
    sortirStatus(data){
        return http.post('/dashboard/sortir/status/all',data);
    }

    
}

export default new DashboardService();

