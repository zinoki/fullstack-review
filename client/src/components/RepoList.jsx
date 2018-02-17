import React from 'react';

const RepoList = ({repos}) => (
  <div>
    <h4> Repo List Component </h4>
    There are {repos.length} repos.
    <table>
      <tbody>
        <tr><td>User ID</td><td>Repo Name</td><td>URL</td><td>Forks</td><td>Watchers</td></tr>
      {repos.map((repo) => (
      <tr> 
        <td>{JSON.stringify({repo}.repo.user_id)}</td>
        <td>{JSON.stringify({repo}.repo.repo_name)}</td>
        <td>{JSON.stringify({repo}.repo.repo_url)}</td>
        <td>{JSON.stringify({repo}.repo.forks)}</td>
        <td>{JSON.stringify({repo}.repo.watchers)}</td>

      </tr>
      )
    )}
    </tbody>
  </table>
  </div>
)

export default RepoList;