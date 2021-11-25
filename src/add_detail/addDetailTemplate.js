export default function addDetailTemplate() {
    return `
        <div class="container" style="display: flex; justify-content: center">
            <div class="card" style="flex-grow: 1; max-width: 400px">
              <div class="card-header">
                Adding a detail
              </div>
              <div class="card-body">
                <form>
                  <div class="form-group">
                    <label for="name">Name</label>
                    <input id="name" type="text" class="form-control" placeholder="Enter detail name">
                  </div>
                  <div class="form-group">
                    <label for="manufacturer">Manufacturer</label>
                    <input id="manufacturer" type="text" class="form-control" placeholder="Enter manufacturer">
                  </div>
                  <div class="form-group">
                    <label for="description">Description</label>
                    <textarea id="description" type="text" class="form-control" placeholder="Enter description"></textarea>
                  </div>
                  <div class="form-group">
                    <label for="type">Detail type</label>
                    <input id="type" type="text" class="form-control" placeholder="Enter detail type"/>
                  </div>
                  <div class="form-group">
                    <label for="price">Price</label>
                    <input id="price" type="number" class="form-control" placeholder="Enter description"/>
                  </div>
                  <button style="margin-top: 5px" id="save-button" type="submit" class="btn btn-primary">Save</button>
                </form>
              </div>
            </div>
        </div>
    `;
}