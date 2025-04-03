
  document.addEventListener('DOMContentLoaded', () => {
    // Obtener la organización guardada
    const selectedOrg = JSON.parse(localStorage.getItem('selectedOrg'));
    
    if (selectedOrg) {
      // Llenar los datos en la página de perfil
      document.querySelector('.icono-org-2').src = selectedOrg.logo;
      document.querySelector('.org-name-2').textContent = selectedOrg.name;
      document.querySelector('.org-desc-2').textContent = selectedOrg.description;
      
      // Llenar la sección Overview
      document.getElementById('ov-country').textContent = selectedOrg.overview.country;
      document.getElementById('ov-yearf').textContent = selectedOrg.overview.yearFounded;
      document.getElementById('ov-orgsize').textContent = selectedOrg.overview.orgSize;
      document.getElementById('ov-socialc').textContent = selectedOrg.overview.cause;
      document.getElementById('ov-progoff').textContent = selectedOrg.overview.programs.join(', ');
      document.getElementById('ov-popserved').textContent = selectedOrg.overview.population.join(' | ');
      document.getElementById('ov-training').textContent = selectedOrg.overview.training;

      if (selectedOrg.overview.ods && selectedOrg.overview.ods.length > 0) {
        const grid = document.getElementById('pic-ods-grid');
        
        grid.innerHTML = '';
        
        const ods = selectedOrg.overview.ods;
    
        ods.forEach((od,index) => {
            const img = document.createElement('img');
            // Usar src en lugar de source (source es para <picture>)
            img.src = ods[index];  // Asume que tienes imágenes como ods1.png, ods2.png, etc.
            
            // Añadir clases si es necesario
            img.classList.add('ods-img');
            
            // Añadir la imagen al grid
            grid.appendChild(img);
        });
        } else {
            document.getElementById('pic-ods-grid').textContent = 'No ODS specified';
        }
     


      // Impact Summary
      document.getElementById('su-benef').innerHTML = selectedOrg.impact.beneficiaries.join('<br>');
      document.getElementById('su-imprep').textContent = selectedOrg.impact.report;
      
     
        for(let i=1;i<=4;i++){ // tenemos 4 filas de bloques
            let bloque_seleccionado = selectedOrg.impact.digitalizacion_level[i-1];
            let id_bloque = 'b'+i+'-'+bloque_seleccionado;

            document.getElementById(id_bloque).style.backgroundColor = getColor(bloque_seleccionado);

        }
    
      
        
        // Financial

        document.getElementById('fin-rev').textContent = '$' + selectedOrg.financial.revenue;
        document.getElementById('fin-exp').textContent = '$' + selectedOrg.financial.expenses;
        document.getElementById('fin-grants').textContent = selectedOrg.financial.grantsAwarded.join(' | ');
              
      const revenueCtx = document.getElementById('chart').getContext('2d');
      const chart = new Chart(revenueCtx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(selectedOrg.financial.fundingSources),
            datasets: [{
                data: Object.values(selectedOrg.financial.fundingSources),
                backgroundColor: [
                  '#1d4a5e',
                  '#fb6b3c',
                  '#ebe363',
                  '#868dd4',
                  '#7494b0'  
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top'
                },
                datalabels: {
                    color: '#fff', 
                    font: {
                        weight: 'bold',
                        size: 14
                    },
                    formatter: (value, context) => {
                        return `${(value*100)}%`;
                    },
                    anchor: 'center',
                    align: 'center',
                    textAlign: 'center',
                    offset: 0 
                }
            },
            cutout: '50%' 
        },
        plugins: [ChartDataLabels] 
      });



    } else {
      // Redirigir a index.html si no hay organización seleccionada
      window.location.href = 'index.html';
    }
  });
  
  function getColor(score) {
    // Retorna color basado en el score
    return score === 1 ? 'rgb(255, 123, 0)' : score === 2 ? 'rgb(19, 46, 19)' : ' rgb(94, 139, 246)';
  }
  
  
  


  
  