import { useState } from 'react'
import Footer from '../best-lolama/Footer'
import FranchiseRequirementsSection from '../best-lolama/FranchiseRequirementsSection'
import FranchiseSection from '../best-lolama/FranchiseSection'
import Header, { type HeaderNavItem } from '../best-lolama/Header'
import { FRANCHISE_REQUIREMENTS, FRANCHISE_STEPS, FRANCHISE_TIERS } from '../data/best-lolama.data'

type FranchisePageProps = {
  onGoHome: () => void
  onGoMenu: () => void
  onGoAbout: () => void
  onGoContact: () => void
  onGoRecognitionAwards: () => void
  onFranchiseNowClick: () => void
}

function FranchisePage({
  onGoHome,
  onGoMenu,
  onGoAbout,
  onGoContact,
  onGoRecognitionAwards,
  onFranchiseNowClick,
}: FranchisePageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigationItems = [
    { label: 'About Us', onClick: onGoAbout },
    { label: 'Menu', onClick: onGoMenu },
    { label: 'Franchise', current: true },
    { label: 'Achievement', onClick: onGoRecognitionAwards },
    { label: 'Contact Us', onClick: onGoContact },
  ] satisfies readonly HeaderNavItem[]

  // Helper function to open modal
  const openModal = (modalId: string) => {
    const dialog = document.getElementById(modalId) as HTMLDialogElement;
    if (dialog) {
      dialog.showModal();
    }
  };

  // Helper function to close modal
  const closeModal = (modalId: string) => {
    const dialog = document.getElementById(modalId) as HTMLDialogElement;
    if (dialog) {
      dialog.close();
    }
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fff9ef_0%,#fffdf9_40%,#fff6e8_100%)] text-[#3B1A0E]">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        onToggleMenu={() => setMobileMenuOpen((current) => !current)}
        onCloseMenu={() => setMobileMenuOpen(false)}
        onLogoClick={onGoHome}
        onFranchiseNowClick={onFranchiseNowClick}
        navItems={navigationItems}
      />

      <main className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <section className="rounded-4xl border border-amber-100 bg-white/90 p-6 shadow-sm sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-700">Franchise</p>
          <h1 className="mt-3 text-4xl font-black leading-tight text-[#3B1A0E] sm:text-5xl">
            Investment tiers with clear growth paths
          </h1>
          <p className="mt-4 text-base leading-8 text-[#6e3d25]">
            The franchise structure is built for entrepreneurs who want a practical footprint, recognizable brand
            equity, and support that can scale with location and territory.
          </p>
        </section>

      {/* FRANCHISE IMAGES SECTION WITH TITLE */}
<div className="mt-10">
  <div className="rounded-4xl border border-amber-100 bg-white p-6 shadow-sm">
    
    {/* --- TITLE INSIDE THE BOX --- */}
    <div className="mb-6">
      <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-700">Franchise</p>
      <h3 className="text-2xl font-black text-[#3B1A0E] sm:text-3xl">Our growing family</h3>
    </div>
    {/* --------------------------- */}

    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      
      {/* 1 - Bacoor Cavite */}
      <div 
        className="group relative overflow-hidden rounded-[20px] border border-amber-200/50 bg-[#FEF9E7] shadow-sm hover:shadow-md transition-all cursor-pointer"
        onClick={() => openModal('modal-franchise1')}
      >
        <div className="h-40 w-full relative">
          <img 
            src="/Images/FRANCHISE LOCATION/BestLolama South Molino Bacoor.png" 
            alt="Franchise location" 
            className="h-full w-full object-cover transition-transform group-hover:scale-110"
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4">
            <p className="text-xl font-semibold text-white">Bacoor Cavite</p>
          </div>
        </div>
      </div>

      {/* 2 - SM Bacoor */}
      <div 
        className="group relative overflow-hidden rounded-[20px] border border-amber-200/50 bg-[#FEF9E7] shadow-sm hover:shadow-md transition-all cursor-pointer"
        onClick={() => openModal('modal-franchise2')}
      >
        <div className="h-40 w-full relative">
          <img 
            src="/Images/FRANCHISE LOCATION/Smbacoor.png" 
            alt="Franchise location" 
            className="h-full w-full object-cover transition-transform group-hover:scale-110"
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4">
            <p className="text-xl font-semibold text-white">SM City Bacoor</p>
          </div>
        </div>
      </div>

      {/* 3 - Tarlac */}
      <div 
        className="group relative overflow-hidden rounded-[20px] border border-amber-200/50 bg-[#FEF9E7] shadow-sm hover:shadow-md transition-all cursor-pointer"
        onClick={() => openModal('modal-franchise3')}
      >
        <div className="h-40 w-full relative">
          <img 
            src="/Images/FRANCHISE LOCATION/tarlac.png" 
            alt="Franchise location" 
            className="h-full w-full object-cover transition-transform group-hover:scale-110"
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4">
            <p className="text-xl font-semibold text-white">Tarlac City</p>
          </div>
        </div>
      </div>

      {/* 4 - Laguna */}
      <div 
        className="group relative overflow-hidden rounded-[20px] border border-amber-200/50 bg-[#FEF9E7] shadow-sm hover:shadow-md transition-all cursor-pointer"
        onClick={() => openModal('modal-franchise4')}
      >
        <div className="h-40 w-full relative">
          <img 
            src="/Images/FRANCHISE LOCATION/laguna.png" 
            alt="Franchise location" 
            className="h-full w-full object-cover transition-transform group-hover:scale-110"
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4">
            <p className="text-xl font-semibold text-white">Laguna</p>
          </div>
        </div>
      </div>

      {/* 5 - Montalban */}
      <div 
        className="group relative overflow-hidden rounded-[20px] border border-amber-200/50 bg-[#FEF9E7] shadow-sm hover:shadow-md transition-all cursor-pointer"
        onClick={() => openModal('modal-franchise5')}
      >
        <div className="h-40 w-full relative">
          <img 
            src="/Images/FRANCHISE LOCATION/montalban.png" 
            alt="Franchise location" 
            className="h-full w-full object-cover transition-transform group-hover:scale-110"
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4">
            <p className="text-xl font-semibold text-white">Montalban Rizal</p>
          </div>
        </div>
      </div>

      {/* 6 - Taguig */}
      <div 
        className="group relative overflow-hidden rounded-[20px] border border-amber-200/50 bg-[#FEF9E7] shadow-sm hover:shadow-md transition-all cursor-pointer"
        onClick={() => openModal('modal-franchise6')}
      >
        <div className="h-40 w-full relative">
          <img 
            src="/Images/FRANCHISE LOCATION/taguig.png" 
            alt="Franchise location" 
            className="h-full w-full object-cover transition-transform group-hover:scale-110"
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4">
            <p className="text-xl font-semibold text-white">Taguig City</p>
          </div>
        </div>
      </div>

      {/* 7 - Dasma */}
      <div 
        className="group relative overflow-hidden rounded-[20px] border border-amber-200/50 bg-[#FEF9E7] shadow-sm hover:shadow-md transition-all cursor-pointer"
        onClick={() => openModal('modal-franchise7')}
      >
        <div className="h-40 w-full relative">
          <img 
            src="/Images/FRANCHISE LOCATION/DASMA.png" 
            alt="Franchise location" 
            className="h-full w-full object-cover transition-transform group-hover:scale-110"
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4">
            <p className="text-xl font-semibold text-white">Dasmariñas</p>
          </div>
        </div>
      </div>

      {/* 8 - SM Manila */}
      <div 
        className="group relative overflow-hidden rounded-[20px] border border-amber-200/50 bg-[#FEF9E7] shadow-sm hover:shadow-md transition-all cursor-pointer"
        onClick={() => openModal('modal-franchise8')}
      >
        <div className="h-40 w-full relative">
          <img 
            src="/Images/FRANCHISE LOCATION/SM City Manila.png" 
            alt="Franchise location" 
            className="h-full w-full object-cover transition-transform group-hover:scale-110"
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4">
            <p className="text-xl font-semibold text-white">SM City Manila</p>
          </div>
        </div>
      </div>

      {/* 9 - SM Tanza */}
      <div 
        className="group relative overflow-hidden rounded-[20px] border border-amber-200/50 bg-[#FEF9E7] shadow-sm hover:shadow-md transition-all cursor-pointer"
        onClick={() => openModal('modal-franchise9')}
      >
        <div className="h-40 w-full relative">
          <img 
            src="/Images/FRANCHISE LOCATION/Sm tanza.png" 
            alt="Franchise location" 
            className="h-full w-full object-cover transition-transform group-hover:scale-110"
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4">
            <p className="text-xl font-semibold text-white">SM Tanza</p>
          </div>
        </div>
      </div>

      {/* 10 - Caloocan */}
      <div 
        className="group relative overflow-hidden rounded-[20px] border border-amber-200/50 bg-[#FEF9E7] shadow-sm hover:shadow-md transition-all cursor-pointer"
        onClick={() => openModal('modal-franchise10')}
      >
        <div className="h-40 w-full relative">
          <img 
            src="/Images/FRANCHISE LOCATION/caloocan.png" 
            alt="Franchise location" 
            className="h-full w-full object-cover transition-transform group-hover:scale-110"
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4">
            <p className="text-xl font-semibold text-white">Caloocan City</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>

{/* ====== MODALS FOR FRANCHISE LOCATIONS ====== */}
{/* Modal Franchise 1 - Bacoor Cavite */}
<dialog id="modal-franchise1" className="modal rounded-2xl backdrop:bg-black/70">
  <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
    <div className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden flex items-center justify-center min-h-[40vh] max-h-[90vh]">
      <button 
        className="absolute right-3 top-3 z-20 text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-colors"
        onClick={() => closeModal('modal-franchise1')}
      >
        ✕
      </button>
      <img
        src="/Images/FRANCHISE LOCATION/BestLolama South Molino Bacoor.png"
        alt="Bacoor Cavite"
        className="w-full h-auto max-h-[85vh] object-contain"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-center">
        <p className="text-xl font-semibold text-white">Bacoor Cavite</p>
        <p className="text-sm text-gray-300">19 Legaspi compound, Molino III, Bacoor Cavite</p>
      </div>
    </div>
  </div>
</dialog>

{/* Modal Franchise 2 - SM Bacoor */}
<dialog id="modal-franchise2" className="modal rounded-2xl backdrop:bg-black/70">
  <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
    <div className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden flex items-center justify-center min-h-[40vh] max-h-[90vh]">
      <button 
        className="absolute right-3 top-3 z-20 text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-colors"
        onClick={() => closeModal('modal-franchise2')}
      >
        ✕
      </button>
      <img
        src="/Images/FRANCHISE LOCATION/Smbacoor.png"
        alt="SM City Bacoor"
        className="w-full h-auto max-h-[85vh] object-contain"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-center">
        <p className="text-xl font-semibold text-white">SM City Bacoor</p>
        <p className="text-sm text-gray-300">Lower Ground Floor in front of Bibingkinitan</p>
      </div>
    </div>
  </div>
</dialog>

{/* Modal Franchise 3 - Tarlac */}
<dialog id="modal-franchise3" className="modal rounded-2xl backdrop:bg-black/70">
  <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
    <div className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden flex items-center justify-center min-h-[40vh] max-h-[90vh]">
      <button 
        className="absolute right-3 top-3 z-20 text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-colors"
        onClick={() => closeModal('modal-franchise3')}
      >
        ✕
      </button>
      <img
        src="/Images/FRANCHISE LOCATION/tarlac.png"
        alt="Tarlac City"
        className="w-full h-auto max-h-[85vh] object-contain"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-center">
        <p className="text-xl font-semibold text-white">Tarlac City</p>
        <p className="text-sm text-gray-300">MacArthur Hwy, San Francisco, Tarlac City</p>
      </div>
    </div>
  </div>
</dialog>

{/* Modal Franchise 4 - Laguna */}
<dialog id="modal-franchise4" className="modal rounded-2xl backdrop:bg-black/70">
  <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
    <div className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden flex items-center justify-center min-h-[40vh] max-h-[90vh]">
      <button 
        className="absolute right-3 top-3 z-20 text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-colors"
        onClick={() => closeModal('modal-franchise4')}
      >
        ✕
      </button>
      <img
        src="/Images/FRANCHISE LOCATION/laguna.png"
        alt="Laguna"
        className="w-full h-auto max-h-[85vh] object-contain"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-center">
        <p className="text-xl font-semibold text-white">Laguna</p>
        <p className="text-sm text-gray-300">Lot 910-F-1 United Bayanihan 4023 City of San Pedro Laguna</p>
      </div>
    </div>
  </div>
</dialog>

{/* Modal Franchise 5 - Montalban */}
<dialog id="modal-franchise5" className="modal rounded-2xl backdrop:bg-black/70">
  <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
    <div className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden flex items-center justify-center min-h-[40vh] max-h-[90vh]">
      <button 
        className="absolute right-3 top-3 z-20 text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-colors"
        onClick={() => closeModal('modal-franchise5')}
      >
        ✕
      </button>
      <img
        src="/Images/FRANCHISE LOCATION/montalban.png"
        alt="Montalban Rizal"
        className="w-full h-auto max-h-[85vh] object-contain"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-center">
        <p className="text-xl font-semibold text-white">Montalban Rizal</p>
        <p className="text-sm text-gray-300">24 J.P. Rizal St. Delas Armas Building Balite Rodriguez, Montalban Rizal</p>
      </div>
    </div>
  </div>
</dialog>

{/* Modal Franchise 6 - Taguig */}
<dialog id="modal-franchise6" className="modal rounded-2xl backdrop:bg-black/70">
  <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
    <div className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden flex items-center justify-center min-h-[40vh] max-h-[90vh]">
      <button 
        className="absolute right-3 top-3 z-20 text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-colors"
        onClick={() => closeModal('modal-franchise6')}
      >
        ✕
      </button>
      <img
        src="/Images/FRANCHISE LOCATION/taguig.png"
        alt="Taguig City"
        className="w-full h-auto max-h-[85vh] object-contain"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-center">
        <p className="text-xl font-semibold text-white">Taguig City</p>
        <p className="text-sm text-gray-300">Gen. Luna St. Ususan, Taguig, Metro Manila Philippines</p>
      </div>
    </div>
  </div>
</dialog>

{/* Modal Franchise 7 - Dasma */}
<dialog id="modal-franchise7" className="modal rounded-2xl backdrop:bg-black/70">
  <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
    <div className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden flex items-center justify-center min-h-[40vh] max-h-[90vh]">
      <button 
        className="absolute right-3 top-3 z-20 text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-colors"
        onClick={() => closeModal('modal-franchise7')}
      >
        ✕
      </button>
      <img
        src="/Images/FRANCHISE LOCATION/DASMA.png"
        alt="Dasmariñas"
        className="w-full h-auto max-h-[85vh] object-contain"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-center">
        <p className="text-xl font-semibold text-white">Dasmariñas</p>
        <p className="text-sm text-gray-300">Barangay H2 ILano Compound, City of Dasmariñas Cavite</p>
        
      </div>
    </div>
  </div>
</dialog>

{/* Modal Franchise 8 - SM Manila */}
<dialog id="modal-franchise8" className="modal rounded-2xl backdrop:bg-black/70">
  <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
    <div className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden flex items-center justify-center min-h-[40vh] max-h-[90vh]">
      <button 
        className="absolute right-3 top-3 z-20 text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-colors"
        onClick={() => closeModal('modal-franchise8')}
      >
        ✕
      </button>
      <img
        src="/Images/FRANCHISE LOCATION/SM City Manila.png"
        alt="SM City Manila"
        className="w-full h-auto max-h-[85vh] object-contain"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-center">
        <p className="text-xl font-semibold text-white">SM City Manila</p>
        <p className="text-sm text-gray-300">3rd floor of HXRM+4G2, Natividad Almeda-Lopez corner A. Villegas and, San Marcelino St, Ermita, Manila, Metro Manila</p>
      </div>
    </div>
  </div>
</dialog>

{/* Modal Franchise 9 - SM Tanza */}
<dialog id="modal-franchise9" className="modal rounded-2xl backdrop:bg-black/70">
  <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
    <div className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden flex items-center justify-center min-h-[40vh] max-h-[90vh]">
      <button 
        className="absolute right-3 top-3 z-20 text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-colors"
        onClick={() => closeModal('modal-franchise9')}
      >
        ✕
      </button>
      <img
        src="/Images/FRANCHISE LOCATION/Sm tanza.png"
        alt="SM Tanza"
        className="w-full h-auto max-h-[85vh] object-contain"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-center">
        <p className="text-xl font-semibold text-white">SM Tanza</p>
        <p className="text-sm text-gray-300">3rd Floor, near Foodcourt Barangay, Antero Soriano Hwy, Tanza, 4108 Cavite</p>
      </div>
    </div>
  </div>
</dialog>

{/* Modal Franchise 10 - Caloocan */}
<dialog id="modal-franchise10" className="modal rounded-2xl backdrop:bg-black/70">
  <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
    <div className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden flex items-center justify-center min-h-[40vh] max-h-[90vh]">
      <button 
        className="absolute right-3 top-3 z-20 text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-colors"
        onClick={() => closeModal('modal-franchise10')}
      >
        ✕
      </button>
      <img
        src="/Images/FRANCHISE LOCATION/caloocan.png"
        alt="Caloocan City"
        className="w-full h-auto max-h-[85vh] object-contain"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-center">
        <p className="text-xl font-semibold text-white">Caloocan City</p>
        <p className="text-sm text-gray-300"> Ehya Plaza, Camarin Rd.</p>
      </div>
    </div>
  </div>
</dialog>

        <div className="mt-10">
          <FranchiseRequirementsSection requirements={FRANCHISE_REQUIREMENTS} />
        </div>

        <div className="mt-10">
          <FranchiseSection franchiseTiers={FRANCHISE_TIERS} franchiseSteps={FRANCHISE_STEPS} />
        </div>
      </main>

      <Footer
        navItems={navigationItems}
      />
    </div>
  )
}

export default FranchisePage