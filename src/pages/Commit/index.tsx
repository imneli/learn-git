import { MainSection } from '../Home/style';

function Commit() {
  return (
    <>
        <MainSection>
        <div className='cards-commands'>
                        <h1>Simple Commit</h1>
                        
                        <p className='command'>git init</p>                        
                        <p className='command'>git remote add origin "url"</p>
                        <p className='command'>git branch -m main</p>
                        <p className='command'>git add .</p>                                            
                        <p className='command'>git commit -m "commit description"</p>
                        <p className='command'>git push origin main</p>
                        <p className='command'>its only this!</p>

                        <p>Click on "Git Learn" to return</p>

                                                                        
                    </div>
        </MainSection>
    </>
  );
}

export default Commit;