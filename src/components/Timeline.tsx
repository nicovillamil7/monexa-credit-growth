interface TimelineStep {
  step: string;
  title: string;
  description: string;
}

interface TimelineProps {
  steps: TimelineStep[];
}

const Timeline = ({ steps }: TimelineProps) => {
  return (
    <div className="relative">
      {/* Connection line */}
      <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-primary" 
           style={{ left: '5%', right: '5%' }} />
      
      <div className="grid md:grid-cols-4 gap-8 relative">
        {steps.map((item, index) => (
          <div key={item.step} className="relative">
            {/* Step circle */}
            <div className="w-16 h-16 md:w-24 md:h-24 mx-auto rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-2xl md:text-4xl shadow-large mb-6 relative z-10">
              {item.step}
            </div>
            
            {/* Content */}
            <div className="text-center">
              <h3 className="font-semibold text-lg md:text-xl mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>

            {/* Mobile connector */}
            {index < steps.length - 1 && (
              <div className="md:hidden w-0.5 h-8 bg-gradient-primary mx-auto my-4" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
