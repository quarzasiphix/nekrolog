
import React from 'react';
import { Music, Mic, BarChart4, Headphones } from 'lucide-react';

const MusicServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
      <div className="glass-card p-6 rounded-xl">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
            <Music className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-playfair font-medium text-white">Oprawa organowa</h3>
        </div>
        <p className="text-gray-300">
          Tradycyjne utwory organowe wykonywane podczas mszy pogrzebowej i ceremonii 
          na cmentarzu, nadające uroczystości podniosły charakter.
        </p>
      </div>
      
      <div className="glass-card p-6 rounded-xl">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
            <Mic className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-playfair font-medium text-white">Oprawa wokalna</h3>
        </div>
        <p className="text-gray-300">
          Profesjonalni wokaliści wykonujący pieśni żałobne, religijne 
          lub świeckie, dostosowane do charakteru ceremonii.
        </p>
      </div>
      
      <div className="glass-card p-6 rounded-xl">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
            <BarChart4 className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-playfair font-medium text-white">Trąbka pogrzebowa</h3>
        </div>
        <p className="text-gray-300">
          Wykonanie utworu "Cisza" lub innych utworów na trąbce, szczególnie 
          poruszające w momencie złożenia trumny do grobu.
        </p>
      </div>
      
      <div className="glass-card p-6 rounded-xl">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
            <Headphones className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-playfair font-medium text-white">Oprawa instrumentalna</h3>
        </div>
        <p className="text-gray-300">
          Szeroki wybór instrumentów: skrzypce, wiolonczela, gitara i inne, 
          wykonujące utwory klasyczne, religijne lub współczesne.
        </p>
      </div>
    </div>
  );
};

export default MusicServices;
