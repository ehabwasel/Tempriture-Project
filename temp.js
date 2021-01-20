

 
  chartIt()
 async function chartIt(){
  const data =  await getData()
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    
    data: {
        labels: data.xLine,
        datasets: [{
            label: '# Table of Global and Hemispheric Annual Means 1880-2018',
            data:data.yLine,
            fill:false,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                
            ],
            borderWidth: 0.5
        }]
    },
   
})};

async function getData(){
  const xLine=[]
  const yLine=[]
  const response =await fetch(`ZonAnn.Ts+dSST.csv`)
  const data= await response.text()
  const raws= data.split(`\n`).slice(1)
  
  raws.forEach(element=>{
    const raw =element.split(`,`)
    const year =raw[0]
    const temp  =raw[1]
    xLine.push(year)
    yLine.push(parseFloat( temp)+14 )
  })
  console.log(yLine)
  return {xLine,yLine}
}