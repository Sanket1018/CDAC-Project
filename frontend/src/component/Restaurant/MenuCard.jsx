import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const demo =[
    {
        category:"Nuts and Seeds",
        ingredient : ["Cashews"]
    },
    {
        category:"Protein",
        ingredients:["Chicken","Bacon strips"]
    }
]


const MenuCard = () => {
  return (
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
            <div className='lg:flex items-center justify-between'>

                <div className='lg:flex items-center lg:gap-5'>
                    <img
                    className="w-[7rem] h-[7rem] object-cover"
                    src="Food/Burger1.jpg" 
                    alt="" />
                </div>

                <div className='space-y-1 lg:space-y-5 lg:max-w-2xl px-4'>
                    <p>₹499</p>
<p className='text-gray-400'>A hamburger or simply burger is a food consisting of fillings...usually a patty of ground meat.</p>

                </div>

            </div>
    
        </AccordionSummary>
        <AccordionDetails>
          <form>
            <div className='flex gap-5'>

            </div>
          </form>
        </AccordionDetails>
      </Accordion>
  )
}

export default MenuCard