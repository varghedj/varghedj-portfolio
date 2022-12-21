
export default {
  name:'testimonials',
  title:'Testimonials',
  type: 'document',
  fields:[
      { 
          name:'name',
          title:'Name',
          type: 'string'
      },
      {
          name:'company',
          title:'Company',
          type:'string'
      },
      {
          name:'imgurl',
          title:'ImgUrl',
          type: 'image',
          options: {
            // the hotspot function allows users to crop their uploaded images
            hotspot: true,
          },
      },  
      {
          name:'feedback',
          title:'Feedback',
          type:'string'
      }
  ]
}