const BASE_URL = 'https://form.v2.support.garena.co.id/_/items';


export default {
    API_GET_CONTENTS: BASE_URL + '/sea_scholarship?access_token=wahyutampan&fields=*.*',
    API_GET_UNIVERSITY: BASE_URL + '/sea_scholarship_univ?access_token=wahyutampan&fields=*.*',
    API_GET_FACULTY: BASE_URL + '/sea_scholarship_faculty?access_token=wahyutampan',
    API_GET_TESTIMONY: BASE_URL + '/sea_scholarship_testimoni?access_token=wahyutampan&fields=*.*'
}