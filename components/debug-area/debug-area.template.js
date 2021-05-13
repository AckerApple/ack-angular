export var string = "<div class=\"child-pad-h-xs flex-wrap text-center\" *ngIf=\"DebugItems.length&gt;1\"><a class=\"cursor-pointer border border-grey-3x radius-5 flex-1\" *ngFor=\"let item of DebugItems\" [ngClass]=\"item===debugItem ? 'bg-positive text-white' : ''\" (click)=\"debugItem = debugItem===item ? null : item\">{{item.name}}<ng-container *ngIf=\"item.type==='array'\">&nbsp;( {{ item.value?.length || 0 }} )</ng-container></a></div><ng-container *ngIf=\"debugItem\"><h3 class=\"margin-bottom-0\">{{ debugItem.name }}</h3><ng-container *ngIf=\"debugItem.type==='array';else regdebug\"><ng-container #loop=\"var\" [var]=\"{view:0}\"></ng-container><pre class=\"bg-grey-3x margin-0 sample-code\" *ngFor=\"let data of debugItem.value;let ii=index\"><ng-container *ngIf=\"loop.var.view==ii\"><div class=\"flex-valign-center child-pad-xs\" style=\"padding:.4em;float:right\"><a class=\"fas fa-caret-square-left hover-bg-energized\" (click)=\"loop.var.view=ii===0 ? debugItem.value.length-1 : ii-1\">&lt;</a><a style=\"color:blue;\" (click)=\"editsMap[ii]=!editsMap[ii]\">edit</a><a style=\"color:blue;\" (click)=\"debugItem.type=null\">all</a><a class=\"fas fa-caret-square-right hover-bg-energized\" (click)=\"loop.var.view=ii===debugItem.value.length-1 ? 0 : ii+1\">&gt;</a></div><p><ng-container *ngIf=\"debugItem.rowTitle;else defaultRowLabel\"><ng-template *ngTemplateOutlet=\"debugItem.rowTitle;context:{index:ii}\"></ng-template></ng-container><ng-template #defaultRowLabel=\"\"><strong>Result {{ii}} of {{debugItem.value.length}} </strong></ng-template></p><absolute-overflow-x *ngIf=\"!editsMap[ii]\" style=\"font-size:0.8em;\"><pre>{{ data | json }}</pre></absolute-overflow-x><ng-container *ngIf=\"editsMap[ii]\"><textarea [name]=\"'editsMap' + ii\" style=\"width:100%;height:300px\" (change)=\"dataString = $event.target.value\">{{ data | json }}</textarea><div style=\"text-align:center\"><a style=\"color:blue;padding-top:.4em;\" (click)=\"updateDataByJsonString(data, dataString, debugItem);editsMap[ii]=false\">save</a></div></ng-container></ng-container></pre></ng-container><ng-template #regdebug=\"\"><div class=\"pos-rel\"><div class=\"pos-abs right-0 z-index-10\"><div class=\"pad-xxs\"><i class=\"fas fa-pencil-alt hover-text-energized\" (click)=\"edit=!edit\" [class.text-calm]=\"edit\">edit</i></div></div></div><ng-container *ngIf=\"edit;else readMode\"><textarea class=\"width-full\" rows=\"30\" (change)=\"apply(debugItem.value,$event.target.value, debugItem)\" wrap=\"off\">{{ debugItem.value | json }}</textarea></ng-container><ng-template #readMode=\"\"><absolute-overflow-x><pre class=\"code-sample\">{{ debugItem.value | json }}</pre></absolute-overflow-x></ng-template></ng-template></ng-container>";
//# sourceMappingURL=debug-area.template.js.map