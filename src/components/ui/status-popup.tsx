const StatusPopup = ({ message, type, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-card border border-border w-full max-w-sm rounded-2xl p-6 shadow-2xl animate-in zoom-in-95 duration-300">
        <div className="flex flex-col items-center text-center">
          {/* Icon Based on Type */}
          <div className={`mb-4 rounded-full p-3 ${type === 'success' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
            {type === 'success' ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            )}
          </div>
          
          <h3 className="text-xl font-bold text-foreground mb-2">
            {type === 'success' ? 'Perfetto!' : 'Ops!'}
          </h3>
          <p className="text-muted-foreground mb-6">
            {message}
          </p>
          
          <button
            onClick={onClose}
            className="w-full bg-foreground text-background font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity"
          >
            Chiudi
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatusPopup;