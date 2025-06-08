import React from 'react'

const StatsSection = () => {
  return (
    <section className="bg-green-600 text-white py-12 px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <p className="text-3xl font-bold">15+</p>
          <p className="text-sm">Products</p>
        </div>
        <div>
          <p className="text-3xl font-bold">200K+</p>
          <p className="text-sm">Satisfied Clients</p>
        </div>
        <div>
          <p className="text-3xl font-bold">10+</p>
          <p className="text-sm">Years of Experience</p>
        </div>
        <div>
          <p className="text-3xl font-bold">25</p>
          <p className="text-sm">Team Members</p>
        </div>
      </section>
  )
}

export default StatsSection
