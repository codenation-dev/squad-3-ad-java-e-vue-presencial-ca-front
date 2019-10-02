<template>
  <div class="card card-list">
    <div class="card-header">
      <div class="w-100">
        <div class="row">
          <div class="col-9">
            <slot name="title"></slot>
          </div>
          <div class="col-3 card-action-btn-group">
            <slot name="actions" />
          </div>
        </div>
      </div>
    </div>
    <div class="card-body">
      <div class="w-100">
        <slot name="body" />
      </div>
    </div>
  </div>
</template>
