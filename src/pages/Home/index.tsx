import { MainSection, ContainerDivs } from './style';

function Home() {
    return(
        <>
            <MainSection>
                <ContainerDivs>
            <div className='flex-content'>
            <button className='commit-template'><a href="/commit">Click here for a commit template</a></button>
                <div className='global-div'>
                    <div className='cards-commands'>
                        <h1>History</h1>
                        
                        <p className='description'>Show all commits, starting with the most recent</p>
                        <p className='command'>git log</p>                        
                        <p className='description'>Show changes over time for a specific file</p>
                        <p className='command'>git log -p file</p>
                        <p className='description'>Show who changed what and when</p>
                        <p className='command'>git blame file</p>                                                
                    </div>


                    <div className='cards-commands'>
                        <h1>Local Changes</h1>
                        
                        <p className='description'>Changed files in your working directory</p>
                        <p className='command'>git status</p>                        
                        <p className='description'>Changes to tracked files</p>
                        <p className='command'>git diff</p>
                        <p className='description'>Add all current changes to the next commit</p>
                        <p className='command'>git add .</p>
                        <p className='description'>Add some changes to the file for the next commit</p>
                        <p className='command'>git add . -p file</p>
                        <p className='description'>Commit all local changes to tracked files</p>
                        <p className='command'>git commit -a</p>
                        <p className='description'>Confirm previously prepared changes</p>
                        <p className='command'>git commit</p>
                        <p className='description'>Change the last commit</p>
                        <p className='command'>git commit --amend</p>
                    </div>

                    <div className='cards-commands'>
                        <h1>Branches</h1>
                        
                        <p className='description'>List all existing branches</p>
                        <p className='command'>git branch -av</p>                        
                        <p className='description'>Change HEAD branch</p>
                        <p className='command'>git checkout "branch"</p>
                        <p className='description'>Create a new branch based</p>
                        <p className='command'>git checkout "new-branch"</p>
                        <p className='description'>Create a new branch based</p>
                        <p className='command'>git checkout--track "remote/branch"</p>
                        <p className='description'>Delete a local branch</p>
                        <p className='command'>git branch -d "branch"</p>
                        <p className='description'>Mark current commits with a tag</p>
                        <p className='command'>git tag "tag-name"</p>
                    </div>
                </div>

                <div className='global-div'>
                    <div className='cards-commands'>
                        <h1>Update and publish</h1>
                        
                        <p className='description'>Lists all currently configured remotes</p>
                        <p className='command'>git remote -v</p>                        
                        <p className='description'>Show information about a remote</p>
                        <p className='command'>git remote show "remote"</p>
                        <p className='description'>Add a new remote repository, called "remote"</p>
                        <p className='command'>git remote add "shortname" "url"</p>
                        <p className='description'>Download all changes from "remote", but do not integrate into HEAD</p>
                        <p className='command'>git fetch "remote"</p>
                        <p className='description'>Download changes and integrate directly into HEAD</p>
                        <p className='command'>git pull "remote" "branch"</p>
                        <p className='description'>Publish the local changes remotely</p>
                        <p className='command'>git push "remote" "branch"</p>
                        <p className='description'>Delete a branch on remote</p>
                        <p className='command'>git branch -dh "remote/branch"</p>
                        <p className='description'>Publish your tags</p>
                        <p className='command'>git push --tags</p>  
                                                                     
                    </div>


                    <div className='cards-commands'>
                        <h1>Undo</h1>
                        
                        <p className='description'>Delete all local changes to your working directory</p>
                        <p className='command'>git reset -hard HEAD</p>                        
                        <p className='description'>Discard all local changes to a specific file</p>
                        <p className='command'>git checkout HEAD "file"</p>
                        <p className='description'>Reverting a commit (creating a new commit with opposite changes)</p>
                        <p className='command'>git revert "commit"</p>
                        <p className='description'>Reset the HEAD pointer to a previous commit and discard all changes since then</p>
                        <p className='command'>git reset -hard "commit"</p>
                        <p className='description'>Preserves all changes as unplanned changes</p>
                        <p className='command'>git reset "commit"</p>
                        <p className='description'>Preserves uncommitted local changes</p>
                        <p className='command'>git reset -keep "commit"</p>
                        
                    </div>

                    <div className='cards-commands'>
                        <h1>Merge and Rebase</h1>
                        
                        <p className='description'>Merge "branch" in your atual HEAD</p>
                        <p className='command'>git merge "branch"</p>                        
                        <p className='description'>Rebase your atual HEAD in "branch"</p>
                        <p className='command'>git rebase "branch"</p>
                        <p className='description'>Abort one rebase</p>
                        <p className='command'>git rebase --abort</p>
                        <p className='description'>Continue one rebase after resolve conflicts</p>
                        <p className='command'>git rebase --continue</p>
                        <p className='description'>Use a tool tour configured merge to resolve conflicts</p>
                        <p className='command'>git mergetool</p>
                        <p className='description'>Use the tour editor to manually resolve conflicts and (after resolving) mark the file as resolved</p>
                        <p className='command'>git add "resolved-file"</p>
                        <p className='command'>git tag "resolved-file"</p>
                    </div>
                </div>
            </div>
                </ContainerDivs>
            </MainSection>
        </>
    )
}

export default Home;