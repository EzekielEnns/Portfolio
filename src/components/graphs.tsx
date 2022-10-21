import React, { useRef } from 'react'
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea, getElementAtEvent} from 'react-chartjs-2';
import { graphql,StaticQuery, navigate } from 'gatsby';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const data = {
      labels: [
            'Backend', 
            'Frontend', 
            'Devops',
            'Systems',
            'Apps'
      ],
      datasets: [
        { 
          data: [ 0, 0, 0, 0, 0, ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(215, 66, 245, 0.5)',
           ],
            borderWidth: 1,
        },
      ],
};


export function Projects () {
    

    const chartRef = useRef();
    const clicker = (event : any) => {
        if (chartRef.current != undefined) {
            let page =data.labels[getElementAtEvent(chartRef.current,event)[0].index] 
            console.log(page)
            navigate(`Projects/${page}/`)
        }
    }

    return (
        <div id='projGraph'>
         <StaticQuery
            query={graphql`
    query MyQuery {
      allMdx(filter: {frontmatter: {purpose: {eq: "Project"}}}) {
        nodes {
          frontmatter {
            tags
          }
        }
      }
    }
    `}  

    render={(test)=>{

        data.datasets[0].data = data.datasets[0].data.map((v,i)=>(
            test.allMdx.nodes.reduce((pre,cv)=>
                (cv.frontmatter.tags.includes(data.labels[i])?pre+1:pre),0)
            )
        )
        

        return(
            <PolarArea data={data} 
            ref={chartRef}
            onClick={clicker}
            style={{cursor:"pointer"}}
            options={
            {
                plugins:{
                    legend:{display:false}
                },
                color:"white",
                borderColor:"white", 
                scales:{ 
                    r:{
                        
                        grid:{ color:"white" },
                        pointLabels:{ 
                            color:(t)=>(data.datasets[0].backgroundColor[t.index]),
                            display:true,
                            centerPointLabels:true,
                            font:{ size:20, },
                        },
                        ticks:{ display:false }
                    },
                }  
            }
        } />
        )}}
        />
        </div>
        
    )
}
