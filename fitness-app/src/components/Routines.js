const React = require('react')
const Def = require('../components/Navbar')

export default function Routines () {
    return(
        <Def>
        <main>
        <h1>Add Routine</h1>
        <form method="POST" action={`/routines/${data.workout.id}?_method=PUT`}>
          <div className="row">
          <div className="form-group col-sm-6 col-md-4 col-lg-6">
            <label htmlFor="name">Exercise</label>
            <input className="form-control" id="name" name="name" value={data.workout.name} required />
          </div>
          <div className="form-group col-sm-6">
            <label htmlFor="sets">Sets</label>
            <input className="form-control"  id="set" name="set" value={data.workout.set} />
          </div>
          </div>
          <div className="row">
          <div className="form-group col-sm-6">
            <label htmlFor="reps">Reps</label>
            <input className="form-control" id="reps" name="reps" value={data.workout.reps} />
          </div>
          </div>
          <div className="row">
          <div className="form-group">
            <label htmlFor="pounds">Pounds</label>
            <input className="form-control" id="pounds" name="pounds"  value={data.workout.pounds} />
          </div>
          <div className="form-group">
            <label htmlFor="timer">Timer</label>
            <input className="form-control" id="timer" name="timer" value={data.workout.timer} />
          </div>
        </div>
          <input className="btn btn-primary" type="submit" value="Update Routine" />
        </form>
      </main>
      </Def>
  );
}