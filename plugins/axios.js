import repository from '~/api/repository'

export default function ({ $axios }, inject) {    
   const api = repository($axios)
   inject('api', api)
}